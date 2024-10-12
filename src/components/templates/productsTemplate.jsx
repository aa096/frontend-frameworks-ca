export function ListingItem({ item }) {
    return (
        <div className="text-center text-secondary bg-white p-6 mb-6 shadow-2xl flex justify-center w-full max-w-[350px] md:max-w-[360px] lg:max-w-[400px]">
            <a href={`/product/?id=${item.id}`} className="block">
                <img 
                    src={item.image.url} 
                    alt={item.image.alt || item.title} 
                    className="object-cover object-center w-[390px] h-[300px] mb-5 m-auto" 
                />
                <p className="text-secondary uppercase font-bold mb-2 text-[17px]">{item.title}</p>
                <p className="text-secondary font-bold">{`Price: $ ${item.discountedPrice.toFixed(2)}`}</p>
                <p className="text-secondary mb-3">{`Rating: ${item.rating} / 5`}</p>
                <p className="text-secondary mb-4">{item.description}</p>
            </a>
        </div>
    );
}

export function Listings({ items }) {
    const dataList = items ?? [];

    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center m-auto"
        >
            {dataList.map(item => (
                <ListingItem key={item.id} item={item} />
            ))}
        </div>
    );
}


export function ProductsTemplate({ items }) {
    return (
        <div className="md:container mx-auto">
            <h1 className="uppercase font-bold text-[25px] text-center my-10 text-primary">Products</h1>
            <Listings items={items} />
        </div>
    );
}