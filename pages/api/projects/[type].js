import database from '../../../firebase/firebase';

export default async function projects (req, res){
    const {
        query: { type } 
    } = req;
    const projects = [];

    try {
        let snapshot;
        if(type === 'stage'){
            snapshot = await database.ref('/projects')
            .orderByChild('staged').equalTo(true).once('value');
        }else{
            snapshot = await database.ref('/projects').once('value');
        }
        
        snapshot.forEach(proj => {
            projects.push({
                id: proj.key,
                ...proj.val()
            })
        })
    } catch (error) {
        throw new Error(error)
    }
    res.status(200).json({ projects });  
}