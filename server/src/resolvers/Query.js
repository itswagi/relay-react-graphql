const node = async (parent, args, {prisma}) => {
    try{
        const data = await prisma.link.findMany({
            where: {
                id: Number(args.id)
            }
        })
        return data
    } catch(err){
        return err
    }
}


const allLinks = async (parent, args, {prisma}) => {
    try{
        return await prisma.link.findMany({})
    } catch(error){
        return error
    }
}

const viewer = async (parent, args, {prisma}) => {
    try{
        return true
    }catch(error){
        return error
    }
}

export default {
    node,
    allLinks,
    viewer
}