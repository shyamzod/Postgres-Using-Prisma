"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function InsertUser({ userName, firstName, lastName, email, password, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
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
    });
}
const insertobj = {
    userName: "shyamzod",
    firstName: "shyam",
    lastName: "zod",
    email: "shyamzod04@gmail.com",
    password: "shyamzod04",
};
//InsertUser(insertobj);
function UpdateUser(userName, firstName, lastName, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.update({
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
    });
}
//UpdateUser("ShyamZ", "Shyam", "Zod", "shyamzod03@gmail.com");
InsertUser({
    userName: "rahulzod",
    firstName: "Rahul",
    lastName: "Zod",
    email: "rahulzod666@gmail.com",
    password: "rahulzod123",
});
function deleteUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.delete({
            where: {
                email,
            },
        });
        console.log(res);
    });
}
//deleteUser("rahulzod666@gmail.com");
function ReadUser(userName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findUnique({
            where: {
                userName,
            },
            select: {
                firstName: true,
                lastName: true,
            },
        });
        console.log(res);
    });
}
//ReadUser("ShyamZ");
