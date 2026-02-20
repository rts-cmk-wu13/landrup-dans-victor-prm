export async function fetchFromApi(endpoint, values) {


    const res = await fetch(`http://localhost:4000/api/v1${endpoint}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
    });

    if (!res.ok) {
        return {
            values,
            errors: { form: ["Wrong email or password"] },
        };
    }

    const data = await res.json();
    return data;
}