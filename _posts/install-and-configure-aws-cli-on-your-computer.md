---
    title: "Install and configure AWS CLI on your computer"
    excerpt: "Learn how to install and configure the AWS CLI on your computer, enabling you to manage AWS services directly from your terminal."
    coverImage: "/images/image-35.png"
    date: "2022-06-28T00:00:00.000Z"
    author:
        name: Sayed Haque
        picture: "/assets/blog/authors/sayed.jpg"
    ogImage:
        url: "/images/image-35.png"
---

The AWS CLI allows you to do and access almost all functionality that you would find in the AWS management console.

Instead of having pretty clickable buttons on the AWS management console, here at the AWS CLI you get only terminal. Not to be discouraged, the AWS CLI can sometimes perform tasks in a much more quicker and snappier way than the GUI of the AWS management console. That being said, let's us see how to install the AWS CLI on our computer.

When AWS CLI is not installed on your computer and you aws in terminal, you should get an error.

![](/images/image-35.png)

There is also some official AWS documentation on this that you will need to visit.

Install AWS CLI - [https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

Once at the page, click the Windows section dropdown and download that .msi file.

![](/images/image-36.png)

After downloading, click the .msi file and follow the onscreen instructions.

After installing lets try the terminal command aws again.

![](/images/image-37.png)

We can see that the aws command produces some help content. This means you have installed correctly.

CONGRATS!! You have just installed AWS CLI on you computer. Now we need to configure it. This means that we will connect this AWS CLI to your AWS account.

In order to connect to our AWS account, we will need a user account. If you don't have a user account on your AWS account, please check out this page on how to create one.

https://cloudbats.com/2022/06/26/create-users-in-aws-iam/

Now that you have a user, lets configure the AWS CLI.

Make sure you have the Access and Secret keys handy of your user.

Type in aws configure into your terminal.

Type in the Access and Secret keys, region, and hit enter all the way through.

![](/images/image-38.png)

That was easy right!! You're done. Now you have AWS CLI installed and configured with the user credentials.
