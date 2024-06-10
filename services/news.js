
const {PrismaClient}=require('@prisma/client')
const BadRequestErrors = require('../errors/badRequests')
const prisma=new PrismaClient()
class NewServices{
  
  // send data
  async post(nwesDate){
    try {
      const exsittitl=await prisma.neww.findFirst({where:{title:nwesDate.title}})
      if(exsittitl){
        throw new BadRequestErrors('is fonud')
      }
      const postNews = await prisma.neww.create({data:nwesDate});
  
      return postNews
    } catch (err) {
      if(err instanceof BadRequestErrors){
        throw err
      }
      throw err; // إعادة إلقاء الخطأ الأصلي
    }
  }

//Get All Data
async get() {
  try {
    const exsit = await prisma.neww.findMany();
    if (!exsit) {
      throw new BadRequestErrors(`Data not find`, ErrorCode.USER_NOT_FOUND);
    }
    return exsit;
  } catch (err) {
    if (err instanceof BadRequestErrors) {
      throw err;
    }
    throw err; // إعادة إلقاء الخطأ الأصلي
  }
}


//Get Data by id
  async getID(id) {
    try {
      const exsitId = await prisma.neww.findUnique({ where: { id } });;
      if (!exsitId) {
        throw new BadRequestErrors(`ID ${id} not found`, ErrorCode.USER_NOT_FOUND);
      }
      return exsitId;
    } catch (err) {
      if (err instanceof BadRequestErrors) {
        throw err;
      }
      throw err; // إعادة إلقاء الخطأ الأصلي
    }
  }

  


  //Delete 
  async delete(id) {
    try {
    
      
      const exsitId = await prisma.neww.delete({ where: { id } });
    ;
      if (!exsitId) {
        throw new BadRequestErrors(`ID ${id} not found`, ErrorCode.USER_NOT_FOUND);
      }
      return exsitId;
    } catch (err) {
      if (err instanceof BadRequestErrors) {
        throw err;
      }
      throw err; // إعادة إلقاء الخطأ الأصلي
    }
  }

  ///abbdate data
  async update(id, data) {
  
    const exsitId = await prisma.neww.findUnique({ where: { id } });
    if (!exsitId) {
      throw new BadRequestErrors(`ID ${id} not found`, ErrorCode.USER_NOT_FOUND);
    }
    return await prisma.neww.update({
      where: { id },
      data
    });
  
  }
}


module.exports=new NewServices()