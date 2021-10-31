import mongoose from "mongoose";

const neverlateModel = mongoose.Schema(
    {

        user: { 
            type: String,
            require: true
        },
        assignment: [
            {
                Subject: {
                    type: String,
                    require: true
                },
                StartTime: {
                    type: String,
                    require: true
                },
                EndTime: {
                    type: String,
                    require: true
                },
                IsAllDay: {
                    type: Boolean,
                    default: false,
                    require: true
                },
                IsReadonly: {
                    type: Boolean,
                    default: true,
                    require: true
                },
            }
        ]
            
        
    },
    {
        timestamps: true,
    }
);
const neverlate= mongoose.model("Neverlate", neverlateModel);
export default neverlate;