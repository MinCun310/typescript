// Datatype-Never: khi chắc chắn không trả ra gì thì dùng kiểu never (hay dùng khi xử lý lỗi)
function handleException(errorMessage: string): never {
    throw Error(errorMessage)
}
handleException("just a test error")