import { supabase } from '../supabaseClient.js'

// Get all products with main image and categories
export async function getProducts() {
    const { data, error } = await supabase
        .from('products')
        .select(`*`)

    if (error) {
        console.error('Error fetching products:', error)
        return []
    }
    return data
}

// Get sizes for a product
export async function getProductSizes(productId) {
    const { data, error } = await supabase
        .from('product_sizes')
        .select('*')
        .eq('product_id', productId)

    if (error) {
        console.error('Error fetching sizes:', error)
        return []
    }
    return data
}

// Get flavors for a product
export async function getProductFlavors(productId) {
    const { data, error } = await supabase
        .from('product_flavors')
        .select('*')
        .eq('product_id', productId)

    if (error) {
        console.error('Error fetching flavors:', error)
        return []
    }
    return data
}

// Get stock for a product (size + flavor)
export async function getProductStock(productId) {
    const { data, error } = await supabase
        .from('product_stock')
        .select('*')
        .eq('product_id', productId)

    if (error) {
        console.error('Error fetching stock:', error)
        return []
    }
    return data
}
