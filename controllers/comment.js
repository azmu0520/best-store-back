// const Comment = require('../modules/comment');

// exports.createComment = async (req, res) => {
//   const comment = new Comment({
//     // collection_id: req.body.collection_id,
//     user_id: req.body.user_id,
//     comment: req.body.comment,
//   });
//   try {
//     await comment.save((err, comment) => {
//       if (err) {
//         res.status(400).json({ error: 'Something went wrong' });
//         return;
//       }
//     });
//     res.status(201).json({ status: 'success', message: 'New comment created' });
//   } catch (error) {
//     res.status(500).json({
//       status: 'fail',
//       message: error,
//     });
//   }
// };
