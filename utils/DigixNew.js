export const kayNew = (message) => {

    if (!message) return null;

    const content = message.viewOnceMessageV2?.message || message;
    
    return content;
}

export default  KayNew;
