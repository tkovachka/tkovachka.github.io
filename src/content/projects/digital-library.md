---
title: "DigitalLibrary"
description: "A .NET web app for tracking book loans in a Digital Library."
status: "ongoing"
startDate: "2025-07"
stack: ["ASP.NET", "C#", "HTML", "CSS", "JavaScript"]
tags: ["web", "backend"]
featured: false
repoUrl: "https://github.com/tkovachka/DigitalLibrary"
thumbnail: "digital-library__thumbnail-digital-library.avif"
---

A web application developed with ASP.NET for managing and tracking a collection of books in a digital library context. Features backend logic in C# and frontend interfaces built using HTML, CSS, and JavaScript.

## Overview

This app was developed using Onion architecture, originally for a class at uni. The idea behind it was to develop a queueing system for loaning and reserving books, with automatic locking of the book for the person who borrowed it, as well as automatic promotion from the reservation queue to the user next in line, when the book is returned. More details about the application on GitHub.

I have since then continued to work on it, but mostly to use it as a base for learning the **Azure** ecosystem.

Currently working on migrating the database to Azure's **CosmosDB** and deploying the app to Azure **App Service**.
