import database from '../../../firebase/firebase';

export default async function blogs (req, res){
    const {
        query: { type } 
    } = req;
    const blogs = [];
    try {
        let snapshot;
        if(type === 'stage'){
            snapshot = await database.ref('/blogs')
                .orderByChild('staged').equalTo(true).once('value');
        }else{
            snapshot = await database.ref('/blogs').once('value');
        }
        snapshot.forEach(blog => {
            blogs.push({
                id: blog.key,
                ...blog.val()
            })
        })
    } catch (error) {
        throw new Error(error)
    }
    res.status(200).json({blogs});  
}