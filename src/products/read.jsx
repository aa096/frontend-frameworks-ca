import { SHOP_URL } from "../api/constants";

export async function getProducts() {
    try {
        const response = await fetch(SHOP_URL, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();

            return Array.isArray(data.data) ? data.data : [];
        } else {
            console.error("Response not ok:", response.statusText);
            return [];
        }
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

export async function getProduct(id, setLoading) {
    try {
        if (!id) {
            throw new Error("Get requires an ID");
        }

        const getProductURL = `${SHOP_URL}/${id}`;
        const response = await fetch(getProductURL);
        
        const data = await response.json();

        if (!data || !data.data) {
            throw new Error("Invalid response format");
        }

        return data; 
    } catch (error) {
        console.error("Error fetching product:", error);
        throw error; 
    } finally {
        setLoading(false); 
    }
}
