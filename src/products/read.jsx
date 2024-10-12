import { SHOP_URL } from "../api/constants";

export async function getProducts() {
    try {
        const response = await fetch(SHOP_URL, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });

        console.log("API Response Status:", response.status);

        if (response.ok) {
            const data = await response.json();
            console.log("Fetched Data:", data);

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

export async function getProduct(id) {
    try {
        if (!id) {
            throw new Error("Get requires an ID");
        }

        const getProductURL = `${SHOP_URL}/${id}`;
        const response = await fetch(getProductURL);
        
        // Ensure that the API returns the correct format (check if it has a 'data' field)
        const data = await response.json();

        if (!data || !data.data) {
            throw new Error("Invalid response format");
        }

        return data; // Return the full object so you can access `data.data`
    } catch (error) {
        throw error;
    }
}