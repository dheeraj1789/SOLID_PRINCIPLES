# Repository Name: SOLID Principles

## Overview

This repository aims to provide a clear understanding of the SOLID principles in software development. SOLID is an acronym for five principles—

1. Single Responsibility Principle (SRP)
2. Open-Closed Principle (OCP)
3. Liskov Substitution Principle (LSP)
4. Interface Segregation Principle (ISP)
5. Dependency Inversion Principle (DIP)

## SOLID Principles

## Single Responsibility Principle (SRP):

This principle states that a class should have only one reason to change. It promotes the idea that a class should have a single responsibility, encapsulating it within the class. This principle helps maintain code that is easier to understand, test, and modify.

| With ISP                                       | Without ISP                                        |
| ---------------------------------------------- | -------------------------------------------------- |
| [Code](src/SRP/withsrp/EmailService.ts)        | [code](src/SRP/withoutsrp/UserManager.ts)          |
| -----                                          | ---                                                |
| [Explanation](src/SRP/withsrp/explaination.md) | [Explaination](src/SRP/withoutsrp/explaination.md) |
| ---                                            | ---                                                |

## Open-Closed Principle (OCP):

The Open-Closed Principle emphasizes that software entities (classes, modules, functions) should be open for extension but closed for modification. It suggests designing modules that can be extended without altering their existing code. By using abstractions, interfaces, and inheritance, we can achieve code that is easily extensible.

| With OCP                                      | Without OCP                                 |
| --------------------------------------------- | ------------------------------------------- |
| [Code](src/OCP/withocp/shape.ts)              | [code](src/OCP/withoutocp/shape.ts)         |
| -----                                         | ---                                         |
| [Explanation](src/OCP/withocp/explanation.md) | [Explaination](src/OCP/withoutocp/shape.ts) |
| ---                                           | ---                                         |

## Liskov Substitution Principle (LSP):

The Liskov Substitution Principle focuses on the concept of substitutability. It states that objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program. In other words, derived classes should be able to be used in place of their base classes without introducing unexpected behavior.

## Interface Segregation Principle (ISP):

The Interface Segregation Principle encourages segregating interfaces into smaller, cohesive units, specific to the needs of clients. Instead of having large, monolithic interfaces, this principle suggests creating smaller, focused interfaces. Clients should not be forced to depend on interfaces they don't use.

## Dependency Inversion Principle (DIP):

The Dependency Inversion Principle emphasizes that high-level modules should not depend on low-level modules; both should depend on abstractions. It promotes decoupling and allows for flexibility and easier testing by relying on abstractions rather than concrete implementations.

## Repository Structure:

### src:

This directory contains code examples demonstrating each of the SOLID principles. Inside each principle folder the source code and eplanation is available to clear the concepts.

## Getting Started

To explore the SOLID principles and examples in this repository, follow these steps:

Clone the repository: git clonehttps://github.com/dheeraj1789/SOLID_PRINCIPLES.git
Navigate to the cloned directory: cd SOLID_PRINCIPLES
Explore the src directory to find examples for each SOLID principle.
Refer to the documentation in the docs directory for more in-depth explanations and additional resources.

## Contributions:

Contributions to this repository are welcome! If you have any improvements, examples, or additional resources related to SOLID principles, feel free to submit a pull request. Please ensure that your contributions adhere to the guidelines outlined in the repository.

## License:

This repository is licensed under the MIT License. Please refer to the LICENSE file for more details.

## Acknowledgments:

Robert C. Martin (Uncle Bob), for introducing and explaining the SOLID principles in his work.

## Resources:

SOLID Principles by Robert C. Martin
[SOLID Principles in TypeScript by Minko
