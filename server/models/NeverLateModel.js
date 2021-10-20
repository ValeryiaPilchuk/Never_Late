import mongoose from "mongoose";

const neverlateModel = mongoose.Schema(
    {

        user: { 
            type: String,
            require: true
        },
        classes: [
            {
                name: {
                    type: String,
                    require: true
                },
                events : [
                    {
                        assignment_name: {
                            type: String,
                            require: true
                        },
                        due_date: {
                            type: String,
                            require: true
                        }
                    }
                ]
            }
        ]
            
        
    },
    {
        timestamps: true,
    }
);
const neverlate= mongoose.model("Neverlate", neverlateModel);
export default neverlate;