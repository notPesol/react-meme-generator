import { useState } from "react";

function Form() {

    const [formData, setFormDate] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comment: "",
        isFriendly: false,
        employment: "",
        favColor: ""
    });
    
    const handleChange = (event) => {
        const {name, type, value, checked} = event.target; 
        setFormDate({
           ...formData, 
           [name]: type === "checkbox" ? checked : value}) 
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    return ( 
        // <form method="POST" action="somePhp.php">
        <form onSubmit={handleSubmit}>
            <input 
                name="firstName" 
                type="text" 
                placeholder="First Name" 
                onChange={handleChange}
                value={formData.firstName}/>
            <input 
                name="lastName" 
                type="text" 
                placeholder="Last Name" 
                onChange={handleChange}
                value={formData.lastName}/>
            <input 
                name="email" 
                type="text" 
                placeholder="Email" 
                onChange={handleChange}
                value={formData.email}/>
            <textarea 
                name="comment"
                placeholder="Comments"
                onChange={handleChange}
                value={formData.comment}
            ></textarea>
            <input 
                id="isFriendly" 
                type="checkbox" 
                name="isFriendly" 
                onChange={handleChange}
                checked={formData.isFriendly} />
            <label htmlFor="isFriendly">Is Friendly ?</label>

            <fieldset>
                <legend>Current employment status</legend>

                <input 
                    name="employment"
                    value="unemployed" 
                    type="radio" 
                    id="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange} />
                <label htmlFor="unemployed">Unemployed</label>

                <input 
                    name="employment" 
                    value="part-time" 
                    type="radio" 
                    id="part-time"
                    onChange={handleChange} />
                <label htmlFor="part-time">Part-time</label>

                <input 
                    name="employment" 
                    value="full-time" 
                    type="radio" 
                    id="full-time"
                    onChange={handleChange} />
                <label htmlFor="full-time">Full-time</label>
            </fieldset>

            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select id="favColor" value={formData.favColor} name="favColor" onChange={handleChange}>
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>

            <br />

            <input type="submit" value="Send it" />
        </form>
     );
}

export default Form;