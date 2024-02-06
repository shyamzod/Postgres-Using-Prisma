import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userName: string;
}
async function InsertUser({
  userName,
  firstName,
  lastName,
  email,
  password,
}: User) {
  const res = await prisma.user.create({
    data: {
      userName,
      firstName,
      lastName,
      email,
      password,
    },
    select: {
      id: true,
    },
  });
  console.log(res);
}
const insertobj = {
  userName: "shyamzod",
  firstName: "shyam",
  lastName: "zod",
  email: "shyamzod04@gmail.com",
  password: "shyamzod04",
};
//InsertUser(insertobj);
async function UpdateUser(
  userName: string,
  firstName: string,
  lastName: string,
  email: string
) {
  const res = await prisma.user.update({
    where: {
      email,
    },
    data: {
      firstName,
      lastName,
      userName,
    },
  });
  console.log(res);
}
//UpdateUser("ShyamZ", "Shyam", "Zod", "shyamzod03@gmail.com");
InsertUser({
  userName: "rahulzod",
  firstName: "Rahul",
  lastName: "Zod",
  email: "rahulzod666@gmail.com",
  password: "rahulzod123",
});
async function deleteUser(email: string) {
  const res = await prisma.user.delete({
    where: {
      email,
    },
  });
  console.log(res);
}
//deleteUser("rahulzod666@gmail.com");
async function ReadUser(userName: string) {
  const res = await prisma.user.findUnique({
    where: {
      userName,
    },
    select: {
      firstName: true,
      lastName: true,
    },
  });
  console.log(res);
}
//ReadUser("ShyamZ");
