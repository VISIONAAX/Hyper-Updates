# Hyper Updates

**A secure, decentralized, and tamper-proof software updates system using Avalanche HyperSDK, revolutionizing firmware delivery for IoT devices with transparency, reliability, and scalability.**

### **Inspiration**
In response to the imperative need for secure and tamper-proof software updates, the inspiration behind this project lies in harnessing blockchain technology, specifically utilizing Avalanche HyperSDK to establish a private blockchain network. This system seeks to redefine software update management by ensuring transparency and decentralization. Tailored for IoT devices like ESP32 and Arduino, a custom library empowers devices to autonomously fetch updates from the blockchain while rigorously verifying integrity through recorded hashes. Integrated with IPFS, the project provides decentralized and immutable storage for software files. The vision extends to efficient update distribution, eliminating central points of failure through the Updates CLI as a secure vendor service. Beyond technical intricacies, the initiative embraces community-driven development, positioning itself at the forefront of innovation, trust, and transparency in software delivery.

Thereby, created a firmware/software store and update system by creating a private blockchain Hyper Updates VM using Avalanche HyperSDK, and implemented a custom OTA(over the air) firmware updates library for ESP32 and Arduino devices. Implemented a vendor service(Updates CLI) which pushes updates to the Hyper Updates VM and simultaneously it creates MQTT call with transaction id to the IOT device then the IOT device can pull the updates from Hyper Updates VM. This works by uploading the firmware binary to IPFS and creating a transaction which stores the data of the update name, version, firmware binary hash and IPFS URL of the binary. This info is then pulled by the IOT device through the transaction ID thus updating to the latest version of the firmware.

---

### **What It Does**
Hyper Updates builds a cutting-edge firmware and software update system by:

1. **Private Blockchain Network**:
   - **Hyper Updates VM**: Developed using Avalanche HyperSDK, this VM serves as the backbone for securely storing metadata for updates, such as update name, version, firmware binary hash, and IPFS URL.

2. **Seamless IoT Update System**:
   - **Vendor Service**:
     - A Next.js-powered UI allows vendors to register updates and upload firmware binaries to IPFS via the **Updates CLI**, making updates easily accessible.
   - **IoT Devices**:
     - IoT devices (e.g., ESP32) autonomously fetch updates using the **HyperOTA library**, verifying integrity with blockchain-stored metadata.

3. **Decentralized and Immutable**:
   - Firmware binaries are stored on IPFS, ensuring tamper-proof and resilient data storage.
   - Devices can seamlessly revert to the previous stable firmware if validation fails.

4. **Reliable and Automated Rollbacks**:
   - Robust rollback mechanisms ensure system stability in the event of a failed update.
   - MQTT notifications alert IoT devices about available updates, streamlining update distribution.

This innovation aligns with **Build a Product**, **Advanced Technical Development**, and **Interoperability** tracks by showcasing real-world blockchain use cases and advanced technical capabilities.

---

### **How It Was Built**
1. **Avalanche HyperSDK**:
   - Designed and implemented the **Hyper Updates VM**, a private blockchain network for securely managing update data and metadata.

2. **IoT Libraries**:
   - Utilized **Elegant OTA** and **MQTT libraries** to develop the **HyperOTA library**, enabling IoT devices to interact with the blockchain and fetch updates autonomously.

3. **Vendor Service**:
   - Built with **Next.js**, this interface provides vendors with an intuitive platform to manage firmware updates by querying blockchain endpoints via RPC.

4. **Custodial Wallets**:
   - Added a custodial wallet feature in the CLI to handle transaction signing for devices, ensuring secure and seamless blockchain interactions.

By integrating these components, Hyper Updates demonstrates how **Custom VMs** and blockchain innovations can address real-world challenges.

---

### **Challenges**
- **Blockchain Integration with IoT Devices**:
   - Ensuring seamless integration between ESP32 and the Hyper Updates VM posed initial challenges, particularly in OTA updates and transaction handling.
- **Secure Transaction Signing**:
   - Addressed by implementing custodial wallets to simplify device interactions with the blockchain.
- **Robust Hash Validation**:
   - Developed a system to ensure error-free hash validation, overcoming the risk of corrupted updates.

These challenges align with the **Advanced Technical Development** track by emphasizing technical problem-solving and scalability improvements.

---

### **Accomplishments**
- Successfully built a blockchain-based IoT firmware update system that ensures tamper-proof updates.
- Developed rollback mechanisms for failed updates, maintaining system integrity.
- Gained comprehensive insights into **HyperSDK**, enabling hyper-performant and scalable custom VMs.

These accomplishments highlight the project’s alignment with the **Build a Product** and **Open Innovation + Bonus Activities** tracks, showcasing technical robustness and real-world applicability.

---

### **Future Plans**
1. **Subnet Integration**:
   - Enable organizations to deploy independent subnets that interoperate through Avalanche, fostering scalability and customization.

2. **Enhanced Update Retrieval**:
   - Implement streamlined update fetching via transaction IDs, eliminating the need for third-party platforms.

3. **Optimized Security and Performance**:
   - Enhance rollback mechanisms and further refine blockchain operations to ensure efficiency and reliability.

These forward-looking goals align with the **Interoperability** and **Advanced Technical Development** tracks by fostering scalability and cross-chain solutions.

---

### **Key Hackathon Tracks**
Hyper Updates aligns with multiple tracks at the Taipei Blockchain Week 2024 Hackathon:

1. **Build a Product**:
   - Demonstrates a clear, impactful use case leveraging Avalanche’s technology stack for real-world IoT applications.

2. **Open Innovation + Bonus Activities**:
   - Actively contributes to Avalanche’s ecosystem through feedback, issue reporting, and PRs.

3. **Advanced Technical Development**:
   - Showcases advanced blockchain development with custom VM creation, scalability solutions, and performance optimization.

4. **Interoperability**:
   - Focuses on enhancing cross-chain solutions, ensuring seamless interactions between IoT devices and blockchain networks.

---

Hyper Updates represents a significant leap in secure and decentralized software delivery. By addressing key industry challenges with blockchain-based innovation, it redefines transparency, trust, and efficiency in IoT firmware management.
