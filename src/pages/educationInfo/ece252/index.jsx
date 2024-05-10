import React, { Component } from "react";
import { Image, Typography, Divider } from "antd";
import concurrencyImg from "../../../components/images/educationImages/concurrencyImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class Ece252 extends Component {
  render() {
    return (
      <div className="ece252-homePage">
        <NavigationBar />
        <div className="ece252-header">ECE252: Systems Programming and Concurrency</div>
        <div className="ece252-content">
          <img src={concurrencyImg} style={{ height: "30%", width: "100%" }} />
          <Typography>
            <Title>ECE252: Systems Programming and Concurrency</Title>
            <Title level={3}>Course Overview</Title>
            
            <Paragraph>
            Processes and threads (pthreads); system calls; concurrency (semaphore, mutex, monitors, and barrier synchronization); user-level memory management. Performance and correctness of concurrent systems. Deadlock detection and recovery; file systems.
            </Paragraph>
            <Paragraph>
            This course delves into operating systems (OS) and systems programming, laying the foundation with a detailed examination of the OS's role as an intermediary between computer hardware and applications. Participants will explore how the OS manages resources like CPU time and memory space, supports application functionality, and handles multiple concurrent programs to prevent conflicts and facilitate cooperation. The syllabus, available under Content → Overview in Learn, provides essential information including lecture topics, grading, course staff contacts, and university policies.
            </Paragraph>
            <Paragraph>
            Further, the course transitions into systems programming, positioned above the operating system layer, encompassing the development of system programs that, while not part of the kernel, are integral to the operating system's functionality. Through examples like file manipulation, communication, and process and thread management, participants will tackle the complexities of writing programs that require hardware knowledge or limited debugging facilities and must account for concurrency. This segment underscores the importance of interacting with the OS to perform operations beyond the capabilities of regular programs, emphasizing the significance of concurrency in enhancing program efficiency and the inherent challenges in ensuring program correctness.
            </Paragraph>

            <Title level={3}>Lab Overview</Title>
            <Title level={4}>Lab1: Multi-threaded Programming with Blocking I/O</Title>
            <Paragraph>
            In the continuation of our exploration of networked and threaded programming, this project presents a challenging task set against the backdrop of image processing. Previously, I worked on reconstructing a complete PNG image from a set of horizontal strips stored on a disk. This project elevates the complexity by sourcing the image segments from the web. I am provided with three 400x300 images located on three different web servers. Each server, upon request, slices an image into fifty 400x6 horizontal strips, assigns a sequential number to each, and transmits a random strip in simple PNG format after a random delay. My objective is to efficiently request all horizontal strips of an image from these servers and concatenate them to restore the original image. To overcome the inherent latency due to the randomness and blocking I/O operations of fetching these strips, I will leverage the pthreads library to design and implement a threaded program that issues multiple simultaneous requests to minimize waiting times. This program will not only request and assemble the image strips into a complete picture but also distribute the tasks across the provided servers, ensuring thread-safe operations and meeting the unique challenges posed by this setup.
            </Paragraph>
            <Paragraph>
            The purpose of this lab was to delve into and acquire hands-on experience with multi-threaded programming within a general Linux environment. I worked with a single-thread implementation that used blocking I/O to request a resource across the network. My task was to diminish the latency of this operation by dispatching multiple requests simultaneously to different machines, utilizing the pthreads library. Through this lab, I gained a solid understanding of how to design and implement a multi-threaded program using the pthreads library and the significant role multi-threading plays in reducing a program's latency.
            </Paragraph>
            <Title level={4}>Lab2: Interprocess Communication and Concurrency</Title>
            <Paragraph>
            In this lab, I tackled a more complex version of the image concatenation problem introduced in a previous lab, focusing on the producer-consumer problem within a multi-tasking context. Here, the challenge was to manage a system with multiple producers and consumers, where the producers download image segments from a web server, and consumers process these segments for future concatenation. This lab introduced the additional complexity of a fixed-size buffer, simulating real-world resource limitations and requiring careful consideration of how many producers and consumers to create for optimal latency improvement.
            </Paragraph>
            <Paragraph>
            I worked with a different server setup, where servers sleep for a fixed time before sending a requested image strip, simulating the data production time. My goal was to request all horizontal strips of a picture from the server and concatenate them in sequence order to restore the original picture as efficiently as possible, given user-specified parameters. This involved downloading image segments into a fixed-size buffer, processing these segments, and then generating the concatenated image file named "all.png". The lab explored not only the dynamic interaction between producing and consuming tasks within a bounded buffer scenario but also the critical section problem, requiring careful synchronization to manage buffer access among multiple producers and consumers. This complex task underscored the importance of understanding multi-threaded programming and resource management in achieving efficient data processing and system performance.
            </Paragraph>
            <Paragraph>
            The purpose of this lab was for me to explore and gain hands-on experience with inter-process communication and concurrency control within a Linux environment. I learned that shared memory is a highly efficient way for processes to communicate, allowing multiple processes to access the same region of memory. However, managing shared memory effectively requires careful attention to avoid conflicting operations, and I utilized the operating system's concurrency control facilities, such as semaphore APIs, to navigate these challenges.
            </Paragraph>
            <Paragraph>
            By the end of this lab, I was able to:
            </Paragraph>
            <Paragraph>
                <ul>
                    <li>Design and implement a concurrent program that operates across multiple processes using the producer-consumer pattern.</li>
                    <li>Employ the fork() system call to create new child processes.</li>
                    <li>Use the wait() family of system calls to gather status-change information from a child process.</li>
                    <li>Implement the Linux shared memory API to enable process communication.</li>
                    <li>Apply the Linux semaphore facility to synchronize processes effectively.</li>
                </ul>
            </Paragraph>
            <Title level={4}>Lab3: A Multi-threaded Web Crawler</Title>
            <Paragraph>
            In this lab, I faced the challenge of transitioning from downloading predefined image segments to searching for these segments across HTTP lab servers. My task was to find 50 unique URLs, each linking to a distinct PNG image segment of a specific image, by crawling these lab servers. To tackle this, I developed a multi-threaded web crawler named findpng2. Starting with a seed URL, findpng2 was designed to scour the web for PNG file URLs and compile the results into a text file named png_urls.txt, while also logging execution time.
            </Paragraph>
            <Paragraph>
            The findpng2 crawler was equipped with several options: the -t option to specify the number of threads for concurrent crawling, the -m option to set a target for the number of unique PNG URLs to find (defaulting to 50 if unspecified), and the -v option to log all visited URLs into a logfile. The crawler's efficiency was measured in execution time, which was outputted alongside the search results.
            </Paragraph>
            <Paragraph>
            As a simplified web crawler, findpng2 navigated the web starting from a given seed URL, identifying valid PNG image links for the results table and discovering new URLs for further exploration. This process involved careful management of visited URLs to avoid redundant searches and continued until the specified number of PNG URLs was found or no more new links could be identified. This lab not only honed my skills in web crawling and multi-threaded programming but also deepened my understanding of practical challenges in web data retrieval.
            </Paragraph>
            <Title level={4}>Lab4: Asynchronous I/O with cURL</Title>
            <Paragraph>
            In preparation for this lab, I started by building and running the provided starter code to get a grasp of its functionalities. I dove into the documentation of the curl multi interface to understand how it enables non-blocking I/O for simultaneous transfers, essential for the task ahead. The assignment continued with the PNG URLs searching challenge from lab4, but this time, the goal was to develop a single-threaded concurrent web crawler named findpng3. This crawler would leverage the curl multi API to perform its searches without relying on pthreads, instead maintaining multiple concurrent connections to servers.
            </Paragraph>
            <Paragraph>
            The command findpng3 was designed with specific options to control its operation: the -t option for setting the maximum number of concurrent connections, the -m option for specifying the target number of unique PNG URLs to find, and the -v option for logging visited URLs. The program's execution time and the list of discovered PNG URLs would be saved to the current working directory, with the search results listed in an unspecified order in a file named png_urls.txt. An empty search result would lead to the creation of an empty file. 
            </Paragraph>
            <Paragraph>
            For example, using findpng3 with options to find up to 20 PNG URLs starting from a seed URL, while keeping a maximum of 10 concurrent connections open, illustrated the crawler's efficiency and its capability to handle web searches in a concurrent manner through a single thread. This approach, recommended over batch processing, demonstrated a significant learning curve in web crawling techniques and the effective use of non-blocking I/O for web data retrieval.
            </Paragraph>
            <Paragraph>
            The purpose of this lab was to design and implement a single-threaded web crawler, shifting from the multi-threaded approach of the previous lab where we utilized blocking I/O with cURL in each thread. This time, I explored the concept of non-blocking or asynchronous I/O, leveraging the cURL multi interface to enable multiple simultaneous transfers within the same thread.
            </Paragraph>
            <Paragraph>
            By the end of this lab, I had successfully designed and implemented a single-threaded concurrent program utilizing asynchronous I/O. This experience not only deepened my understanding of the cURL multi-interface but also enhanced my skills in developing efficient, concurrent web applications with a single-threaded architecture.
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default Ece252;
