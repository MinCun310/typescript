// Void Type
const lesson16 = (a: number, b: number): number => {
    return a + b
}

// không return về cái gì thì ts sẽ định nghĩa kiểu void (void là dấu hiệu một hàm không muốn trả về giá trị)
const handleLogs = (message: string): void => {
    console.log("message: ", message)
}
handleLogs("just a message")

console.log("sum: ", lesson16(2, 8))