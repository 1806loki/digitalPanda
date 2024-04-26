import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug: "users",
    auth: {
        verify: {
            generateEmailHTML: ({ token }) => {
                return `<p>Hello Please Verify</p>`
            }
        }
    },
    access: {
        read: () => true,
        create: () => true,

    },
    fields: [
        {
            name: "role",
            type: "select",
            admin: {
                condition: () => false
            },
            options: [
                {
                    label: "Admin",
                    value: "admin",
                }, {
                    label: "User",
                    value: "user"
                }
            ],
        },
    ],
};
