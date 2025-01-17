// "use client"; // ระบุว่าเป็น Client Component
import React from 'react'
// import { useState, useEffect } from "react";



async function fetchPosts() {
    const res = await fetch("https://secure2.playpark.com/RankingEvent/RankingAPI.ashx?GameID=335", {
        next: { revalidate: 10 }, // ดึงข้อมูลใหม่ทุก 10 วินาที
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

async function ApiTable() {
    const posts = await fetchPosts();

    return (
        <div className="container mx-auto">
            <div className="p-5">
                <h1 className="text-2xl font-bold mb-4">User Table</h1>
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">ID</th>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.data.map((post) => (
                            <tr key={post.id} className="text-center">
                                <td className="border border-gray-300 px-4 py-2">{post.combat_point}</td>
                                <td className="border border-gray-300 px-4 py-2">{post.role_name}</td>
                                <td className="border border-gray-300 px-4 py-2">{post.guild_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}
export default ApiTable;