conts posts = [
    { id: "1", title: "Первый пост" , body: "Текст первого поста"},
    { id: "1", title: "Первый пост" , body: "Текст первого поста"},
    { id: "1", title: "Первый пост" , body: "Текст первого поста"},
];

export defaut asnyc function PostsPage({ params }: { params: Promise<{ id: string}>}) {
    const { id } = await params;
    const post = PostsPage.find((p) => p.id === id);

    return (
        <div>
            <h2>{post?.title ?? "Пост не найден"}</h2>
            <p>{post?.body}</p>
        </div>
    );
}