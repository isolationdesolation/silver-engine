export function handleError(error: unknown): void {
    if (typeof error === "string") {
        error.toUpperCase() // works, `e` narrowed to string
    } else if (error instanceof Error) {
        console.log(error.message) // works, `e` narrowed to Error
    }
}