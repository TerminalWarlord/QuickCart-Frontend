import CategoriesItems from './CategoriesItems';

export default function Categories() {
    return <section className="my-[5rem] mx-8">
        <div className="flex justify-between">
            <div className="my-4">
                <h1 className='text-2xl font-semibold'>Shop by Categories</h1>
            </div>
            <div className="flex">
                <button className="ml-4 text-2xl border-none py-2 px-6 bg-slate-100 rounded-lg"> &lt; </button>
                <button className="ml-4 text-2xl border-none py-2 px-6 bg-slate-100 rounded-lg"> &gt; </button>
            </div>
        </div>
        <CategoriesItems />
    </section>
}

