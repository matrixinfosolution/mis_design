import React from 'react';
import './CategoryTable.css';

const CategoryTable = () => {
return(
    <div className="container-fluid">
        <section className="row mt-3">
            <aside className="col-4">
                <table className="table table-hover category-table">
                    <thead>
                        
                            <th><h2>Category</h2></th>
                        
                    </thead>
                    <tbody>
                    
                            <tr>
                                <td classNmae="categ">Web Design</td>
                                <td><div className="category-tag butt1">340</div></td>
                            </tr>
                            <tr>
                            <td classNmae="categ">Javascript</td>
                                <td><div className="category-tag butt2">74</div></td>
                            </tr>
                            <tr>
                            <td classNmae="categ">JQuery</td>
                                <td ><div className="category-tag butt3">41</div></td>
                            </tr>
                            <tr>
                            <td classNmae="categ">CSS</td>
                                <td><div className="category-tag butt4">35</div></td>
                            </tr>

            
                        
                    </tbody>

                </table>
            </aside>
        </section>
    </div>
  );
}

export default CategoryTable;