import database from '../../firebase/firebase';

export default async function skills (req, res){
    let skills = '';
    try {
        const snapshot = await database.ref('/skills').once('value');
        skills = snapshot.val()
    } catch (error) {
        throw new Error(error)
    }
    res.status(200).json({ ...skills });  
}