import { Link, useLoaderData } from "react-router-dom";
import Header from "../../components/Header";
import RightNav from "../../components/layout-component/RightNav";

const NewsDetails = () => {
    const { data } = useLoaderData();
    const news = data[0];

    return (
        <div className="max-w-7xl mx-auto">
            <header>
                <Header />
            </header>
            <h1 className='text-xl font-semibold'>Dragon News</h1>
            <main className="grid grid-cols-12 gap-6">
                <section className="col-span-9">
                    {
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-5 pt-10">
                                <img
                                    src={`${news.image_url}`}
                                    className="rounded-xl w-full" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{news.title}</h2>
                                <p>{news.details}</p>
                                <div className="card-actions">
                                    <Link to={`/category/${news.category_id}`} className="btn btn-primary">Back to category</Link>
                                </div>
                            </div>
                        </div>
                    }
                </section>
                <aside className="col-span-3">
                    <RightNav />
                </aside>
            </main>
        </div>
    )
}

export default NewsDetails;