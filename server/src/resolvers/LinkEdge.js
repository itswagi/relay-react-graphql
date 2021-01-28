const node = async (parent, args, {prisma}) => {
    try{
        return parent
    } catch(err){
        return err
    }
}

export default {
    node
}