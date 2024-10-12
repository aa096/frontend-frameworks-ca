export function ListingItem({ item }) {
    const hasDiscount = item.price > item.discountedPrice;
    const discountPercentage = hasDiscount
        ? Math.round(((item.price - item.discountedPrice) / item.price) * 100)
        : 0;

    return (
        <div className="flex flex-col justify-between text-center text-secondary bg-white p-6 mb-6 shadow-2xl w-full max-w-[350px] md:max-w-[360px] lg:max-w-[400px] transition-transform transform hover:scale-105">
            <a href={`/product/?id=${item.id}`} className="block">
                <div className="relative mb-5">
                    <img 
                        src={item.image.url} 
                        alt={item.image.alt || item.title} 
                        className="object-cover object-center w-[390px] h-[300px] m-auto" 
                    />
                    {hasDiscount && (
                        <div className="absolute top-0 left-0 bg-primary text-white text-sm font-bold px-2 py-1">
                            {discountPercentage}% OFF
                        </div>
                    )}
                </div>

                <p className="text-secondary uppercase font-bold mb-2 text-[19px]">{item.title}</p>
                {hasDiscount ? (
                    <div className="text-secondary font-bold mb-3">
                        <p className="line-through text-[12px]">{`$ ${item.price.toFixed(2)}`}</p>
                        <p className="font-black text-[19px] text-primary">{`Price: $ ${item.discountedPrice.toFixed(2)}`}</p>
                    </div>
                ) : (
                    <p className="font-black mb-3 text-[19px] text-primary">{`Price: $ ${item.discountedPrice.toFixed(2)}`}</p>
                )}

                <p className="text-secondary mb-3">{`Rating: ${item.rating} / 5`}</p>
                <p className="text-secondary mb-4">{item.description}</p>
            </a>
            <a 
                href={`/product/?id=${item.id}`} 
                className="mt-4 inline-block bg-primary text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-secondary"
            >
                View Product
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