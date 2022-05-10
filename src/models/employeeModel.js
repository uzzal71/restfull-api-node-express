import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },  
    address: { type: String, required: true },
    department: { type: String, required: true },     
    designation: { type: String, required: true },
    gross_salary: { type: String, required: true },  
    joing_date: { type: Date, required: true },  
    status: { type: String, enum: ['active', 'inactive'] },
    createdAt: { type: Date, required: true }
});

const employee = mongoose.model("Employee", employeeSchema);

export default employee;