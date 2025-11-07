// js/utils.js - Utility functions for component loading

class ComponentLoader {
    // Load HTML component into target element
    static async loadComponent(componentPath, targetElementId) {
        try {
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const html = await response.text();
            document.getElementById(targetElementId).innerHTML = html;
            return true;
        } catch (error) {
            console.error('Error loading component:', error);
            document.getElementById(targetElementId).innerHTML = 
                `<div class="alert alert-warning">Error loading component: ${componentPath}</div>`;
            return false;
        }
    }

    // Load multiple components at once
    static async loadAllComponents(components) {
        const promises = components.map(comp => 
            this.loadComponent(comp.path, comp.containerId)
        );
        return await Promise.all(promises);
    }

    // Check if file exists
    static async fileExists(url) {
        try {
            const response = await fetch(url, { method: 'HEAD' });
            return response.ok;
        } catch (error) {
            return false;
        }
    }
}

// Make it available globally
window.ComponentLoader = ComponentLoader;