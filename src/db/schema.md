## db schema

### Users

```
- Username : unique not null upto 50 chars,
- UserId: unique not null,
- LastLogin: ,
- Posts: foriegn key, 
- Following: , // todo
- Bookmarks: [Posts foreign key], // todo
- CreatedAt: , added by sequelize by default
```

### Posts

```
- Owner : user-id foriegn key,
- Likes: users, // todo
- Comments: comment-id foriegn key, // todo
- ImageUrl: image id or url, // todo
- Tags: [TagId foriegn key], // todo
- CreatedAt: , added by sequelize by default
```

### Comments

```
- commentId: ,
- Owner: ,
- PostId: ,
- Message: ,
- Likes: [Users forignkey],
- Comments: [foriegn key to comments],
- CreatedAt: , added by sequelize by default,
```

### Tags

```
- TagId: unique not null,
- TagName: unique not null,
- PostsCount: ,
- CreatedAt: , added by sequelize by default
```
