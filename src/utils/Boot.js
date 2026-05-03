export async function runBoot(typeLine, setShowVisitor){
    await typeLine("Initializing Portfolio System...");
    await typeLine("Loading Developer: Akash Yadav");
    await typeLine("Full Stack Developer | MERN");

    await new Promise((r) => setTimeout(r, 500));

    setShowVisitor(true);

    await new Promise((r) => setTimeout(r, 800));

    await typeLine("Loading Resources...");
    await typeLine("Starting React Engine...");
    await typeLine("Welcome 🚀");
    await typeLine("Type Hello to Excess Akash Portfolio");
    await typeLine("Here> ");
};

