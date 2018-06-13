# Xavier

"Don't read words, read people"

Anyone who has experienced an interview in the 21st Century has probably studied or heard of the concept of non-verbal communication. A script does not fully translate the meaning of a conversation.

Text-based chat is merely a tool for fact exchange. Emojis are overused to express a human behind a screen, but what if we could feel that without any imagery? What if we could read a person by the speed at which they type, or  their hesitations?

That’s the UX I wanted to create with this application.

# React design

I modularised all components for readability and easier error containment.

Initially I held the state of all conversations in the app, but to speed up booting time, I trigger the requests for information from the server based on the active publisher and subscriber.

When a contact is clicked, a history request is sent to the server and replaces the active chat.

# Scaling the socket connections:

A single server, configured appropriately can handle hundreds of thousands of simultaneous webSocket connections that are mostly idle since an idle webSocket uses pretty much no server CPU. 

For even larger scale deployments, one can cluster the server (run multiple server processes) and use sticky load balancing to spread the load.

Research [socket clusters](https://socketcluster.io/#!/)

# Beyond front-end

A good UI is the one that is seamless, unnoticeable. It should not pronounce itself, but server the user experience.

For that reason, I had to expand the front-end brief into the full-stack.
I aimed for a well-balanced, performant application that is simple, and easy to read, both for users, and developers.

As a front-end Engineer, I always focus my development on the UX.

# To do:

 - Create Accounts
 - Search / Add users
 - Create individual chat rooms
 - Create an option for users to choose whether or not they want their conversation saved in the database
 - Manage state with Redux
 - Implement Authorisation cookie
 - Create a slick landing page animation while the app boots up
