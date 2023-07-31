import {useState} from "react"
const Form=()=>{
    const [name, setName] = useState('')
    const [email, setEmail]= useState('')
    const [number, setNumber]= useState('')
    const [phoneType, setPhoneType] = useState('')
    const [bio, setBio] = useState('')
    const [notify, setNotify] = useState('')

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
    }

    return(
    <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text"  value={name} onChange={ e => setName(e.target.value)}/>

        <label htmlFor="email">Email:</label>
        <input id="email" type="text" value={email} onChange={ e => setEmail(e.target.value)} />

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