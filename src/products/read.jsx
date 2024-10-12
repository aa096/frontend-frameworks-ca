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
