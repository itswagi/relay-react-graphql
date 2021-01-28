const link = async (parent, args, {prisma}) => {
    try{
        return await prisma.link.findMany({})
    }catch(error){
        return error
    }
}

export default {
    link
}