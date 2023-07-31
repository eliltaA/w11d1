import {useEffect, useState} from "react"

const Form=()=>{
    const [name, setName] = useState('')
    const [email, setEmail]= useState('')
    const [number, setNumber]= useState('')
    const [phoneType, setPhoneType] = useState('')
    const [bio, setBio] = useState('')
    const [notify, setNotify] = useState('')
    const [validationErrors, setValidationErrors] = useState({})

    useEffect(()=>{
        const errors = {name:[], email:[]};
        if (!name.length) errors['name'].push('Please enter your Name');
        if (name.length > 30) errors['name'].push('Name must be less than 30 characters');
        if (email.length && !email.includes('@')) errors['email'].push('Please provide a valid Email');
        if (!email.length) errors['email'].push('Please provide an Email.')
        setValidationErrors(errors);
    }, [name, email])

    const onSubmit = e => {
        e.preventDefault();
        const inputs = {
            name, 
            email,
            number,
            phoneType,
            bio,
            notify
        }
        console.log(inputs)
        setName('');
        setEmail('');
        setNumber('');
        setPhoneType('');
        setBio('');
        setNotify('');
        setValidationErrors({});
    }

    return(
    <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text"  value={name} onChange={ e => setName(e.target.value)}/>
        {validationErrors.name.length > 0 && validationErrors.name.map((error, idx) => (
              <ul key={idx}>
                  <li className='error'>* {error}</li>
              </ul>
          ))}

        <label htmlFor="email">Email:</label>
        <input id="email" type="text" value={email} onChange={ e => setEmail(e.target.value)} />
        {validationErrors.email.length > 0 && validationErrors.email.map((error, idx) => (
              <ul key={idx}>
                  <li className='error'>* {error}</li>
              </ul>
          ))}

        <label htmlFor="number">Number:</label>
        <input id="number" type="tel" value={number} onChange={ e => setNumber(e.target.value)} />

        <label htmlFor="phoneType">PhoneType:</label>
        <select id="phoneType" value={phoneType} onChange={ e => setPhoneType(e.target.value)} >
            <option value="home">home</option>
            <option value="work">work</option>
        </select>

        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" cols="30" rows="10" value={bio} onChange={ e => setBio(e.target.value)} placeholder="enter a bio"></textarea>

        <label htmlFor="notify">Notify?:</label>
        <select id="notify" value={notify} onChange={ e => setNotify(e.target.value)} >
            <option value="yes">yes</option>
            <option value="no">no</option>
        </select>

        <input type="submit" value="submit"/>
    </form>
    )
}

export default Form;