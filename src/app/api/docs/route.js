

import { NextResponse } from "next/server";

export async function GET() {
    const apiDocumentation = [
        {
            endpoint: "/api/login",
            method: "POST",
            description: "Authenticate the user and return a token.",
            request: {
                body: {
                    email: "string (required)",
                    password: "string (required)"
                },
            },
            authentication: "Not required",
            response: {
                success: "boolean",
                token: "string (JWT token)",
                message: "string (status message)"
            }
        },
        {
            endpoint: "/api/signup",
            method: "POST",
            description: "Register a new user in the system.",
            request: {
                body: {
                    fullName: "string (required, user's full name)",
                    userName: "string (required, unique username)",
                    email: "string (required, user's email address)",
                    password: "string (required, user's password)",
                },
            },
            response: {
                success: "boolean",
                createdUser: {
                    _id: "string (user's ID)",
                    fullName: "string",
                    userName: "string",
                    email: "string",
                    avatar: "string (user's profile picture, if any)",
                },
                message: "string (success or error message)",
            },
        },
        {
            endpoint: "/api/listProducts",
            method: "GET",
            description: "Fetch a list of all cars.",
            request: {
                query: {
                    page: "number (optional, default: 1)",
                    limit: "number (optional, default: 10)"
                },
            },
            authentication: "Required (Bearer Token)",
            response: {
                success: "boolean",
                data: [
                    {
                        id: "string",
                        title: "string",
                        company: "string",
                        type: "string",
                        description: "string",
                        images: ["string"]
                    }
                ],
                total: "number (total number of cars)"
            }
        },
        {
            endpoint: "/api/cars/:id",
            method: "DELETE",
            description: "Delete a car by its ID.",
            request: {
                params: {
                    id: "string (required)"
                },
            },
            authentication: "Required (Bearer Token)",
            response: {
                success: "boolean",
                message: "string (status message)"
            }
        },
        {
            endpoint: "/api/createProduct",
            method: "POST",
            description: "Add a new car to the database.",
            request: {
                body: {
                    title: "string (required, car title)",
                    type: "string (required, car type like diesel, petrol, etc.)",
                    company: "string (required, car company name)",
                    dealer: "string (required, dealer name)",
                    description: "string (required, a description of the car)",
                    photo: "array of strings (URLs of images)",
                    owner: "string (required, user ID of the car owner)",
                },
            },
            response: {
                success: "boolean",
                message: "string (success or error message)",
            },
        },
        {
            endpoint: "/api/eachProduct",
            method: "GET",
            description: "Retrieve the details of a specific car by its ID.",
            request: {
                query: {
                    id: "string (required, ID of the car to fetch details for)",
                },
            },
            response: {
                success: "boolean",
                message: "string (success or error message)",
                res: {
                    _id: "string",
                    title: "string",
                    type: "string",
                    company: "string",
                    dealer: "string",
                    description: "string",
                    images: "array of strings (image URLs)",
                    owner: "string",
                    createdAt: "date",
                    updatedAt: "date",
                },
            },
        },
        {
            endpoint: "/api/getSearch",
            method: "GET",
            description: "Search for cars based on various fields (e.g., title, company, dealer).",
            request: {
                query: {
                    query: "string (required, search term for filtering cars)",
                },
            },
            response: {
                success: "boolean",
                cars: [
                    {
                        _id: "string",
                        title: "string",
                        type: "string",
                        company: "string",
                        dealer: "string",
                        description: "string",
                        images: "array of strings (image URLs)",
                        owner: "string",
                        createdAt: "date",
                        updatedAt: "date",
                    },
                ],
            },
        },
        {
            endpoint: "/api/updateProduct",
            method: "POST",
            description: "Update the details of an existing car.",
            request: {
                body: {
                    id: "string (required, ID of the car to be updated)",
                    title: "string (car title)",
                    type: "string (car type like diesel, petrol, etc.)",
                    company: "string (car company name)",
                    dealer: "string (dealer name)",
                    description: "string (a description of the car)",
                    images: "array of strings (URLs of images)",
                },
            },
            response: {
                success: "boolean",
                message: "string (success or error message)",
            },
        },
    ];

    return NextResponse.json(apiDocumentation);
}