import productImg from '../../assets/1.jpg';
const categoryItems = [
    {
        categoryId: 'c1',
        categoryImage: productImg,
        categoryName: 'Casual Wear',
    },
    {
        categoryId: 'c2',
        categoryImage: productImg,
        categoryName: 'Formal Wear',
    },
    {
        categoryId: 'c3',
        categoryImage: productImg,
        categoryName: 'Traditional Attire',
    }
]

export default function CategoriesItems() {
    return <div className="flex w-full h-80 mt-4">
        {categoryItems.map(category => {
            return <div key={category.categoryId} className="ml-4 first:ml-0 w-60 rounded-md bg-slate-100">
                <div className="relative rounded-md w-full h-full" style={{ background: `url('${category.categoryImage}')`, backgroundSize: 'cover' }}>
                    <div className="absolute bg-white py-3 px-8 text-center rounded-lg bottom-[15px] mx-8">
                        <h3>{category.categoryName}</h3>
                    </div>
                </div>
            </div>
        })}
    </div>
}