#!/usr/bin/env python3
import re

# Read the file
with open('app/lib/servicesData.tsx', 'r') as f:
    content = f.read()

# Extract the header (before services array)
header_match = re.search(r'(.*?export const services: ServiceData\[\] = \[)', content, re.DOTALL)
header = header_match.group(1) if header_match else ''

# Extract the footer (after services array)
footer_match = re.search(r'(\];\s*export function getAllServiceSlugs.*)', content, re.DOTALL)
footer = footer_match.group(1) if footer_match else ''

# Extract all services
services_pattern = r'    \{\s*id: \'([^\']+)\',.*?\n    \}(?=,?\s*(?:\{|$|\]))'
services = {}

for match in re.finditer(services_pattern, content, re.DOTALL):
    service_id = match.group(1)
    service_content = match.group(0)
    services[service_id] = service_content

# Define the new order
priority_order = [
    'android-ios-development',
    'web-development',
    'market-research',
    'marketing-plan-development',
    'performance-marketing',
    'seo-analytics',
    'lead-generation',
    'video-content-creation',
    'online-reputation-management'
]

# Build the new content
new_services = []
for i, service_id in enumerate(priority_order):
    if service_id in services:
        service_content = services[service_id]
        # Add comment for priority
        priority_comments = {
            'android-ios-development': '    // Priority 1: Core product-building service\n',
            'web-development': '    // Priority 2: Foundational service - entry point for most clients\n',
            'market-research': '    // Priority 3: Strategy before execution\n',
            'marketing-plan-development': '    // Priority 4: Converts research into actionable strategy\n',
            'performance-marketing': '    // Priority 5: Execution phase focused on ROI\n',
            'seo-analytics': '    // Priority 6: Long-term organic growth + measurement\n',
            'lead-generation': '    // Priority 7: Tactical service supporting performance + SEO\n',
            'video-content-creation': '    // Priority 8: Supporting service feeding marketing channels\n',
            'online-reputation-management': '    // Priority 9: Maintenance + brand trust\n'
        }
        new_services.append(priority_comments.get(service_id, '') + service_content)

# Combine everything
new_content = header + '\n' + ',\n'.join(new_services) + '\n' + footer

# Write the new file
with open('app/lib/servicesData.tsx', 'w') as f:
    f.write(new_content)

print("✅ Services reordered successfully!")
print("\nNew order:")
for i, service_id in enumerate(priority_order, 1):
    print(f"{i}. {service_id}")
