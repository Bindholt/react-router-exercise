import "../recipes/RecipeForm.css";
import React from 'react';
import { useState } from 'react';
import { Category, addCategory } from "../services/apiFacade";

export default function CategoryForm() {
    const [newCategory, setNewCategory] = useState<Category>({name: ""});
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewCategory(() => ({[name]: value}));
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const submitCategory = await addCategory(newCategory);
        console.log(submitCategory);
    }


    return (
        <>
            <h2>Category Add</h2>
            <form id="categoryForm">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={newCategory.name}
                            onChange={handleChange}
                            required
                        />
                </div>
                <button type="submit" onClick={handleSubmit} className="recipe-form-btn">
                    Submit
                </button>
            </form>
        </>
    )
}