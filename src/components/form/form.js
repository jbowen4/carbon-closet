import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { app } from '../../firebase';

function Form() {
    const [data, setData] = useState({
        name: '',
        industry: '',
        website: '',
        emissions: 0,
        description: ''
    });
    const [photo, setPhoto] = useState('');
    const [image, setImage] = useState('');

    const onChange = e => {
        const { name, value } = e.target;

        setData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        });
        console.log(data);
    };

    const onChangeImage = async (e) => {
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setPhoto(await fileRef.getDownloadURL());
    }

    const onSubmit = async e => {
        e.preventDefault();

        try {
            const res = await axios.post('https://esg-metric-api.herokuapp.com/api/comp/', {
                name: data.name,
                industry: data.industry,
                website: data.website,
                total_emissions: data.emissions,
                photo: photo,
                description: data.description
            });

            console.log(res.data);

            setData({
                name: '',
                industry: '',
                website: '',
                emissions: 0,
            });

            setImage('');
        } catch (err) {
        }
    };

    return (
        <Fragment>
            <div>
                <Link to="/">Back to Browse</Link>
                <form onSubmit={onSubmit}>
                    <label>
                        Company Name:
                        <input type="text" name="name" onChange={onChange} />
                    </label>
                    <label>
                        Industry:
                        <input type="text" name="industry" onChange={onChange} />
                    </label>
                    <label>
                        Website:
                        <input type="text" name="website" onChange={onChange} />
                    </label>
                    <label>
                        Company Logo:
                        <input type="file" name="image" onChange={onChangeImage} />
                    </label>
                    <label>
                        Total Emissions:
                        <input type="text" name="emissions" onChange={onChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </Fragment>
    )
}

export default Form;
