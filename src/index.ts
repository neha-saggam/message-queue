export function main() {
    return "Hello World"
}

// Main execution
if (require.main === module) {
    console.log(main());
}