import React, { Component } from "react";
import { Image, Typography } from "antd";
// import githubAppImg from "../../../components/images/projectsImages/compilerX/githubAppImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class compilerX extends Component {
  render() {
    return (
      <div className="compilerX-homePage">
        <NavigationBar />
        <div className="compilerX-header">CompilerX</div>
        <div className="compilerX-content">
          {/* <Image src={githubAppImg} style={{ height: "25%", width: "100%" }} /> */}
          <Typography>
            <Title level={1}>Overview</Title>
            <Paragraph>
            Our compiler project is an advanced VHDL synthesizer and simulator that converts VHDL code into detailed circuit diagrams and precise simulations. The project encompasses multiple critical stages: initially, it parses VHDL to decode its structure; next, it simplifies these structures for enhanced efficiency; it then maps these simplified structures onto technology-specific diagrams using Graphviz; and ultimately, it creates Java-based simulations that replicate the VHDL code’s behavior in a controlled, virtual environment.
            </Paragraph>
            <Paragraph>
            At the initial parsing phase, we develop custom recursive descent parsers and employ Parsing Expression Grammars (PEG) to meticulously parse VHDL’s syntax and semantics. This meticulous parsing allows us to build an abstract syntax tree (AST) that reflects the hierarchical structure of VHDL code, setting the stage for subsequent transformations.

During the simplification phase, our goal is to enhance the AST by reducing complexity and boosting performance. This includes removing redundant expressions, implementing logical simplifications, and refining the code’s structural layout.

The technology mapping phase utilizes Graphviz to convert our intermediate representations into gate-level diagrams, crucial for visualizing the transition from VHDL code to tangible hardware components, bridging the gap between theoretical designs and their practical implementations.

The project culminates with the generation of Java-based simulations designed to emulate the behavior of the VHDL code under test conditions. This critical phase not only verifies the logic within the VHDL code but also offers valuable insights into the potential performance and efficiency of the hardware design.
            </Paragraph>
            <Paragraph>
            Throughout this project, we rigorously apply fundamental compiler construction principles—including lexical analysis, syntax parsing, semantic analysis, and code generation—to ensure a robust and comprehensive application of these methodologies within the realm of VHDL and digital circuit design.
            </Paragraph>
            <Title level={1}>Key Features</Title>
            <Title level={3}>1. Recursive Descent Parsing of W:</Title>
            <Paragraph>
            In this part of my project, I concentrated on Recursive Descent Parsing for a specialized waveform language, known as W, crucial for simulating the inputs and outputs of circuits. This lab immersed me in core compiler concepts such as EBNF, parsing, and essential programming techniques including object-oriented programming and test-driven development.
            </Paragraph>
            <Paragraph>
            The initial task was to master the grammar of W, formatted in EBNF, which defines the textual representation of waveforms for circuit simulations. My approach began with creating a regular expression recognizer for W using a test-driven methodology. This approach was instrumental in fine-tuning my regular expression to precisely match the syntax of the W language, enhancing my grasp of how recognizers function.

Subsequently, I crafted a recursive descent parser for W from scratch. This task involved developing methods for each non-terminal in the grammar, which provided me with a practical understanding of parsing algorithms, especially how to handle repetitions and choices within the grammar.

I also engaged in pretty-printing, the reverse of parsing, which entails generating textual representations from an abstract syntax tree (AST). This phase was pivotal in thoroughly grasping both the structure of W files and the parsing process.
            </Paragraph>
            <Paragraph>
                It culminated in the creation of a recursive descent parser that builds an AST based on inputs from the W language. This extensive exercise not only reinforced my understanding of foundational compiler principles but also linked theoretical knowledge with practical application, particularly in the realm of circuit simulation.
            </Paragraph>
            <Title level={3}>2.  Transforming W -> SVG for Visualization:</Title>
            <Paragraph>

            In this part of the project, I focused on converting waveform data from W files into SVG format for graphical visualization. This task involved translating the textual representation of waveforms, as utilized by our circuit simulator, into SVG files that can be seamlessly viewed in web browsers or vector graphics applications like Inkscape.

The primary challenge was to accurately map each bit in a waveform—depicted as 0s and 1s in the W file—to corresponding vertical and horizontal lines in the SVG output. This process necessitated meticulous tracking of the current position on the canvas and adjusting the Y position downward with each new waveform to accommodate subsequent entries.

Upon completing the transformation, I conducted a visual inspection of the output in Firefox and a textual review of the SVG file content to confirm its accuracy. This part of the project enhanced my understanding of trees, transformations, and working with XML and SVG formats. It also introduced me to object contracts and equivalence classes in programming, underscoring the importance of maintaining object equality and hash code consistency, which are essential for producing professional code in any object-oriented programming environment.
            </Paragraph>
            <Title level={3}>3. Recursive Descent Parsing of F:</Title>
            <Paragraph>
            In the third part of the project, I engaged with Recursive Descent Parsing for a formula language F, crafted as an intermediary language for our circuit synthesis and simulation tool. Unlike the complexity of VHDL, which includes conditionals and module structures, F simplifies to boolean formulae, thereby easing mechanical manipulation.

During this phase, I delved into key compiler concepts such as context-free grammars, LL(1) grammars, and advanced parsing techniques. Concurrently, I explored core programming concepts like inheritance, polymorphism, and design patterns within the scope of this project. I developed a recursive descent parser for F, adhering to its grammar to translate a given program into an abstract syntax tree (AST), with a particular focus on the logical operators and, or, and not.

Further exploration included diving into the class hierarchy in Java, analyzing how our code is structured and the critical roles of polymorphism and dynamic dispatch in managing expressions within F. The construction of the AST was a central task, simplifying the program structure into a tree format that discards unnecessary syntactic elements to concentrate on logical flow.

Additionally, I implemented the equals and isomorphic methods for AST classes to engage more deeply with object equality and structural similarities. This exercise emphasized the significance of precise object comparison in programming, especially pertinent in scenarios involving recursive structures and polymorphism.

By the conclusion of this part of the project, I had gained a comprehensive understanding of parsing F programs, constructing their ASTs, and navigating the intricacies of Java’s class hierarchy and object equality. This foundational knowledge is crucial for the forthcoming tasks of translating VHDL to F and optimizing F programs for further applications in our circuit synthesis and simulation tool.
            </Paragraph>
            <Title level={3}>4.  Circuit Optimization: F Simplifier</Title>
            <Paragraph>
            In the fourth part of the project, I focused on developing a simplifier for the formula language F, which serves as an intermediate language in our circuit synthesis and simulation toolchain. My primary objective was to apply term-rewriting techniques to simplify boolean formulas based on algebraic identities, enhancing their efficiency for synthesis and simulation while preserving their logical equivalence.

Throughout this phase, I delved into intermediate languages and the fundamental principles of term rewriting, such as identity and absorbing elements. I also focused on ensuring the termination, confluence, and convergence of the simplification process. From a programming perspective, I utilized design patterns like the interpreter and template to ensure my code maintained representation invariants for correctness.

The simplification process was iterative, designed to reach a fixed point where no further simplifications were possible, thereby guaranteeing termination. I also ensured confluence by making certain that the outcome of simplification was consistent regardless of the order in which rules were applied, thus ensuring predictable and reliable optimization.

Key simplification rules involved eliminating redundant expressions, applying logical identities, and reducing complex expressions to simpler, equivalent forms. I employed techniques such as transforming binary expressions into n-ary forms to standardize comparisons, facilitating associativity and commutativity checks.

Managing object sharing in the simplification process was crucial for enhancing memory efficiency. I focused on reusing immutable nodes wherever possible and paid meticulous attention to class representation invariants to ensure the creation of valid and well-formed AST objects throughout the simplification steps.

The challenge of maintaining the logical equivalence of boolean formulas, given its NP-completeness, was addressed using SAT solvers to verify the semantic equivalence of the original and simplified formulas. This approach ensured the simplifier’s correctness without the need for manual truth table comparisons.

This part of the project significantly deepened my understanding of compiler optimization techniques, underscored the importance of a well-structured intermediate representation, and highlighted the practical application of theoretical computer science principles in compiler design.
            </Paragraph>
            <Title level={3}>5.  Parsing W with Parboiled:</Title>
            <Paragraph>
            In the fifth part of the project, I explored the use of Parboiled, a parser generator that employs Parsing Expression Grammars (PEGs), to develop a parser for the W language. This tool significantly differed from the manual parser I crafted in an earlier phase, as it enabled me to define grammars directly within Java, making full use of its internal Domain Specific Language (DSL) capabilities. My focus was on mastering Parboiled’s rule constructors and understanding the crucial role of stack operations in constructing the Abstract Syntax Tree (AST). This transition from a simple recognizer to a comprehensive parser involved sophisticated stack manipulations, which illuminated the deterministic nature of PEGs by resolving grammar ambiguities and emphasizing concepts akin to pushdown automata.

This approach not only facilitated a deeper understanding of parsing mechanisms but also enhanced my grasp of the theoretical underpinnings of compiler construction. Through this lab, I acquired hands-on experience in parser generation, bridging the gap between theoretical concepts learned in academia and their practical application in software development. This lab was instrumental in solidifying my knowledge of compiler architecture, particularly in the parsing phase, and underscored the importance of efficient grammar definition and parser automation in modern compiler design.
            </Paragraph>
            <Title level={3}>6. Parsing F with Parboiled:</Title>
            <Paragraph>
            In this part of the project, I expanded my parser development skills by using Parboiled to construct a parser for the F language, leveraging the insights gained from my prior work on the W language. This experience deepened my understanding of advanced parsing concepts through the use of Parsing Expression Grammars (PEGs), which are pivotal in modern compiler construction. This lab was particularly instrumental in reinforcing my practical skills in applying essential compiler design patterns such as Composite, Template Method, and Singleton, specifically tailored to parsing and Abstract Syntax Tree (AST) construction scenarios.

My primary focus was to develop an initial recognizer and subsequently evolve it into a comprehensive parser for the F language. Utilizing Parboiled, I engaged extensively with stack manipulation techniques and exploited its robust internal Domain Specific Language (DSL) capabilities within Java. This approach not only facilitated a seamless transition from simple recognition to full parsing capabilities but also exemplified the efficiency of integrating design patterns into the parsing process. This lab served as a significant milestone in my journey through compiler design, illustrating the critical role of structured parsing strategies and the practical implementation of theoretical concepts in real-world compiler architecture.
            </Paragraph>
            <Title level={3}>7: Technology Mapping: F -> Graphviz:</Title>
            <Paragraph>
            In this part, my focus was on technology mapping, specifically translating F language programs into Graphviz to visualize their structure, which deeply engaged me with complex compiler concepts such as common subexpression elimination. This lab challenged me to tackle intricate programming issues, including the use of hash structures, managing iteration order, and ensuring object identity integrity. A significant portion of this lab was devoted to mastering the Visitor design pattern, which proved instrumental in performing efficient tree traversals essential for the transformation process.

The lab underscored the paramount importance of maintaining determinism in my code, a critical factor for achieving predictable and consistent outcomes in compiler operations. By transforming F programs into a format compatible with Graphviz, I not only visualized the underlying process of compiler optimizations but also applied advanced techniques like common subexpression elimination to enhance the efficiency of the generated outputs.

This experience also allowed me to appreciate the benefits of a modular code structure, facilitated by design patterns such as Visitor. This pattern enabled a clear, manageable approach to navigating complex compiler architectures and optimization strategies, highlighting the intricate interplay between theoretical compiler concepts and their practical application in real-world scenarios. Through this lab, I gained a comprehensive understanding of both the theoretical underpinnings and practical implementations of technology mapping in the context of compiler design.
            </Paragraph>
            <Title level={3}>8: Simulation: F -> Java</Title>
            <Paragraph>
            In this part, I embarked on developing a simulator generator for F programs, a project that greatly enhanced my comprehension of compilers and simulations. The primary goal was to automatically generate Java code that simulates the logic defined in F programs. For example, given an F program statement like "X = A or B;", my generator produced a Java program capable of reading input values for 'A' and 'B', computing 'X', and outputting the result. This process entailed reading an input W file, allocating storage for outputs, cycling through time steps to compute these outputs, and ultimately, outputting the results to a W file.
            </Paragraph>
            <Paragraph>
            One of the more challenging aspects of this lab was managing name collision and capture within the generated Java code, ensuring that the variable names extracted from the F program did not conflict with existing Java names or reserved keywords. To mitigate these issues, I adopted a naming convention that prefixed generated variable names with 'in_' for inputs and 'out_' for outputs, which helped maintain both uniqueness and clarity.

Furthermore, this lab allowed me to delve into the differences between interpreters and compilers. While an interpreter directly executes the instructions of a program, a compiler, such as the one I was working on, transforms the source code into another language that can subsequently be executed. This fundamental distinction is crucial for understanding how different execution methodologies impact both performance and development processes.

Testing the functionality of the code generator also posed unique challenges. Directly comparing the generated Java code with a reference implementation was impractical due to potential syntactic variations. Instead, I concentrated on verifying the correctness of the simulation outputs as a means to assess the efficacy of the generated simulators.
            </Paragraph>
            <Paragraph>
            Overall, this part not only enhanced my knowledge of program generation and the handling of name capture issues but also refined my abilities in designing and testing compilers. This experience was instrumental in advancing my capabilities as a software engineer, particularly in the fields of compiler construction and simulation technology.
            </Paragraph>
            <Title level={3}>9: Simulation: F -> x64 Assembly</Title>
            <Paragraph>
            In this part of the project, I delved into generating x64 assembly code from F programs, a venture that expanded my comprehension from Java simulation to the complexities of assembly language. Unlike the previous segment where I generated Java code to simulate F programs by processing W files, this part required integrating the W program directly into the x64 assembly code. This method meant that the generated assembly would operate autonomously without reading any inputs, thus removing the need for interaction between Java and native assembler code.

A significant challenge I faced was register allocation. Given the limited number of registers in a computer and the potential for numerous variables in an F program, strategizing effective register allocation was crucial. I employed registers r8–r15 for input variables, using a straightforward approach where each input variable was assigned its own register, as long as the total did not exceed eight. This tactic proved adequate for handling individual AssignmentStatements within the F program, enhancing flexibility in variable usage throughout the program.

To execute this assembly code, I utilized the gcc compiler for assembling and linking, marking my first foray into such a toolset, which proved both challenging and illuminating. This experience emphasized the importance of grasping the hardware interactions of the software I develop, fostering a deeper appreciation for low-level programming.

This part of the project not only broadened my expertise into assembly language but also provided crucial insights into hardware resource limitations, such as register constraints. It significantly advanced my capabilities as a software developer, offering a comprehensive view of the compilation process and the transition from high-level abstractions to machine-executable instructions.
            </Paragraph>
            <Title level={3}>10: vhdl Recognizer & Parser</Title>
            <Paragraph>
            In this part of the project, I embarked on developing a recognizer and parser for a simplified subset of VHDL using Parboiled. This subset focused on basic constructs such as bit variables and single architecture per entity while excluding complex features like stdlogic, nested ifs, and arrays. My objective was to craft tools capable of understanding and analyzing this specific VHDL subset, adhering to the established grammar.

Utilizing Parboiled, a tool with which I've grown increasingly proficient through prior experiences, I methodically defined methods for each non-terminal in the VHDL grammar. I translated EBNF multiplicities and lexical specifications into Parboiled's syntax, ensuring explicit checks for the End Of Input (EOI). A key innovation introduced during this part of the project was the development of a common base class, VBase, which facilitated the handling of VHDL's case insensitivity by matching keywords in a case-independent manner, allowing me to concentrate on the structure and logic of VHDL code without the complications of case sensitivity.

The recognizer was straightforwardly developed by transforming the EBNF grammar into Parboiled rules, a process that was relatively smooth due to my familiarity with similar tasks from previous work on the F language recognizer. Building the parser to convert recognized VHDL syntax into an Abstract Syntax Tree (AST) was a critical next step. This required careful stack management within Parboiled to accurately construct the AST, necessitating precise planning and extensive testing to ensure its correctness.

To confirm the effectiveness of my parser, I employed rigorous testing beyond manual inspection. I used test harnesses provided by the project, which were designed to ensure the parser not only accepted valid VHDL syntax but also correctly rejected incorrect inputs.

This part of the project significantly enhanced my understanding of grammar engineering, emphasizing the trade-offs between creating a "perfect" recognizer and designing one that is optimally suited for specific tasks such as offering useful feedback to programmers. I learned about the complex and versatile nature of parsing technology, as demonstrated in environments like Eclipse where multiple parsers are deployed for different purposes.

Overall, this part of the project was a profoundly enriching experience that deepened my grasp of language parsing and applied theoretical concepts to practical software engineering challenges, reinforcing my capabilities in language processing and compiler construction.
            </Paragraph>
            <Title level={3}>11: vhdl -> vhdl: Desugaring & Elaboration</Title>
            <Paragraph>
            In this part of the project, I tackled the complex task of VHDL to VHDL transformation through two key processes: desugaring and elaboration, employing the Visitor design pattern. This transformation aimed to simplify VHDL code by converting intricate logical expressions into their fundamental constructs of and, or, and not—referred to as desugaring—and to inline components declared within an architecture, known as elaboration. These transformations are crucial for synthesizing VHDL code onto hardware that supports limited logic gate types or for streamlining the code structure for further processing.

For desugaring, I developed a transformer that navigated through an Abstract Syntax Tree (AST) of the VHDL program, aiming to rewrite expressions using xor, nand, nor, xnor, and "=" operators into expressions only utilizing and, or, and not. This modification is vital for adapting VHDL code to specific hardware constraints, such as devices equipped solely with NAND gates. For instance, transforming an xor expression into a composition of and, or, and not operations ensures compatibility with a broader range of programmable hardware.

Elaboration, the more intricate transformation, involved expanding and inlining any component instances declared within an architecture if the component definition is in the same VHDL source file. This step is essential for synthesizing complex VHDL designs, like a ripple-carry adder composed of multiple one-bit full adders, by allowing a more detailed and expanded view of the VHDL code, which facilitates easier synthesis onto hardware by providing a direct mapping of VHDL components to hardware gates without needing external component references.

For inlining components without a signal list in the architecture, I mapped input variables to available registers and replaced signal assignments directly into the architecture body. When inlining components with a signal list or processes in the architecture, I ensured the correct signal substitutions in sensitivity lists and if-else conditions. Crucially, all internal signals added through elaboration were prefixed with unique identifiers to avoid signal name collisions and ensure consistency in logical behavior.

I implemented these transformations using the powerful Visitor design pattern, which enabled me to traverse the VHDL AST and apply changes in a modular and organized fashion. This approach provided flexibility in handling various VHDL constructs and ensured that the transformation logic remained decoupled from the AST structure itself.

This part of the project challenged me to deeply consider VHDL program structure and the implications of syntactic transformations on hardware synthesis. It was a complex but rewarding experience that enhanced my understanding of VHDL processing and the practical considerations involved in preparing VHDL code for hardware implementation.
            </Paragraph>
            <Title level={3}>12: vhdl Process Splitting & Combinational Synthesis</Title>
            <Paragraph>
            In this part of the project, I concentrated on two crucial transformations for VHDL programs: process splitting and combinational synthesis, with the goal of optimizing VHDL code for hardware synthesis and aiding its conversion into the F programming language.

Process Splitting involved restructuring VHDL processes to ensure each process assigns a value to only one signal. This step was critical for simplifying VHDL code, rendering it more modular and easier to synthesize onto hardware. For instance, a VHDL process that assigned values to multiple outputs within an if/else statement was divided into separate processes for each output signal. This division resulted in a cleaner, more organized VHDL codebase.

Combinational Synthesis, conversely, focused on translating VHDL logic into the F programming language, which supports a more straightforward and direct representation of logic suitable for synthesis. This transformation involved extracting logical expressions from VHDL and methodically converting them into F expressions, adhering to F's syntax while preserving the semantics of the original logic. A significant aspect of this task was the handling of conditional statements in VHDL and translating them into equivalent F expressions, ensuring both accuracy and the preservation of logic integrity in the translation.

Both tasks required an in-depth exploration of AST manipulation, utilizing the Visitor design pattern for traversing and modifying the VHDL AST. This approach proved pivotal in successfully accomplishing both process splitting and combinational synthesis.

Through this part of the project, I enhanced my skills in language translation and VHDL code optimization, acquiring invaluable experience in compiler construction techniques and broadening my understanding of language processing challenges.
            </Paragraph>
            <Title level={3}>13: Simulation: F -> Assembly</Title>
            <Paragraph>
            In this part of the project, I embarked on a complex transformation task: generating x86 assembly from F programs to simulate their logic. This involved adapting a previous simulator generator where, instead of Java, the computational logic for output pin values was articulated in assembly language. The transformation focused on methods computing output pins, with the main Java body invoking these assembly-implemented methods.

I selected MASM32 for the assembler due to its compatibility with the instructional skeleton code provided and my familiarity with the Windows environment. Configuring MASM32 required installing a 32-bit JDK and setting up environment variables to integrate smoothly with my development setup. While exploring alternatives like GCC for inline assembly or JWasm was intriguing, they were beyond the scope of this project due to time constraints and the need for instructional support.

Utilizing the Java Native Interface (JNI) was crucial for linking Java with native assembly code. Adhering to JNI’s naming conventions and including pointers to the Java environment and class instance in function signatures introduced additional complexity, providing valuable insights into how JNI operates and its interaction with native code.

At the core of my task was generating assembly code that mirrored the logical operations from the F program. By traversing the AST in post-order, I translated expressions into assembly instructions, ensuring that the final computation result was consistently stored in the EAX register. This task deepened my understanding of register allocation and underscored the importance of efficiently managing limited resources like registers and memory in assembly language programming.

This part of the project immersed me in the nuances of low-level programming, from navigating hardware constraints such as register availability to translating high-level logical expressions into machine-level representations. This experience not only solidified my understanding of the software-hardware interface but also underscored the critical importance of efficient code generation for embedded systems and hardware simulation.

Overall, this part of the project proved to be both challenging and enriching, significantly enhancing my technical skills in assembly language and system-level programming, laying a robust foundation for future endeavors in low-level system design and optimization.
            </Paragraph>
            <Title level={3}>14: Simulation: F -> JVM</Title>
            <Paragraph>
            In this part of the project, I addressed the challenging task of generating JVM bytecode from F programs, which deeply enhanced my understanding of the JVM’s handling of boolean logical operators. Unlike in high-level programming languages, the JVM does not have dedicated boolean operations and instead, represents booleans as integers—zero for false and one for true. This required a nuanced approach to effectively simulate boolean logic.

A critical realization in this process was that F's semantics do not necessitate short-circuit evaluation, which greatly simplified the bytecode generation. I approached the implementation of disjunction and conjunction using integer operations—addition and multiplication, respectively—taking advantage of the JVM’s operand stack to store temporary values. This method allowed me to transform the F AST from infix to postfix notation, known as Reverse Polish Notation (RPN), thereby streamlining the generation of bytecode instructions.

The challenge of implementing the negation operation was uniquely tackled due to the JVM’s lack of a direct boolean 'not' operation. I explored strategies including conditional branching and bitwise XOR, with the latter proving more efficient by avoiding conditional overhead and normalizing any non-zero integer to one to effectively toggle the boolean value.

Throughout this part of the project, I created several sample simulators to translate specific F logic into JVM bytecode. These ranged from simulating simple OR operations to handling more complex logic involving AND operations and negations. Each simulator provided practical insights into low-level bytecode manipulation and the intricacies of JVM instruction set architecture.

This part of the project went beyond mere language translation; it involved a thorough exploration of JVM mechanics and practical exercises in bytecode optimization and logical expression evaluation. The experience not only broadened my understanding of JVM bytecode but also enhanced my skills in low-level programming and optimization, bridging software engineering with computer architecture.
            </Paragraph>

          </Typography>
          
        </div>
      </div>
    );
  }
}

export default compilerX;
