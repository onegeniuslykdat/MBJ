import config from '../config.json';

/* ADMIN */
// export class AdminServices {
//     static GetRules = async () => {
//         const url = `${config.BaseUrl}/admin/index`;
//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     static GetRuleById = async (id: number) => {
//         const url = `${config.BaseUrl}/admin/getrule/${id}`;
//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     static CreateRule = async (rule: Rule) => {
//         const url = `${config.BaseUrl}/admin/createrule/`;
//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 body: JSON.stringify({
//                     answer: rule.answer,
//                     divisors: rule.numbers,
//                     isEnabled: rule.isEnabled
//                 }),
//                 headers: {
//                     'Content-type': 'application/json'
//                 }
//             });
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     static EditRule = async (id: number, rule: Rule) => {
//         const url = `${config.BaseUrl}/admin/editrule/${id}`;
//         try {
//             const response = await fetch(url, {
//                 method: 'PUT',
//                 body: JSON.stringify({
//                     answer: rule.answer,
//                     divisors: rule.numbers,
//                     isEnabled: rule.isEnabled
//                 }),
//                 headers: {
//                     'Content-type': 'application/json'
//                 }
//             });
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     static DeleteRule = async (id: number) => {
//         const url = `${config.BaseUrl}/admin/deleterule/${id}`;
//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-type': 'application/json'
//                 }
//             });
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

/* GAME SESSION */
// export class GameSessionServices {
//     static StartSession = async (playerId: number) => {
//         const url = `${config.BaseUrl}/gamesession/startsession/${playerId}`;
//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-type': 'application/json'
//                 }
//             });
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.log(error);
//         }
//     }    
//     static GetRandomNumber = async (sessionId: number) => {
//         const url = `${config.BaseUrl}/gamesession/getrandomnumber/${sessionId}`;
//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-type': 'application/json'
//                 }
//             });
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     static StopSession = async (sessionId: number) => {
//         const url = `${config.BaseUrl}/gamesession/stopsession/${sessionId}`;
//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-type': 'application/json'
//                 }
//             });
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     static GetCorrectAnswer = async (answer: Answer) => {
//         const url = `${config.BaseUrl}/gamesession/getcorrectanswer/`;
//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 body: JSON.stringify({
//                     summaryId: answer.summaryId,
//                     answer: answer.answer,
//                     id: answer.id,
//                     questionId: answer.questionId,
//                     sessionId: answer.sessionId
//                 }),
//                 headers: {
//                     'Content-type': 'application/json'
//                 }
//             });
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     static GetSessionSummaries = async (sessionId: number) => {
//         const url = `${config.BaseUrl}/gamesession/getsessionsummaries/${sessionId}`;
//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-type': 'application/json'
//                 }
//             });
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

/* PLAYER */
// export class PlayerServices {
//     static GetPlayer = async (id: number) => {
//         const url = `${config.BaseUrl}/player/getplayer/${id}`;
//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     static CreatePlayer = async (player: Player) => {
//         const url = `${config.BaseUrl}/player/createplayer/`;
//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 body: JSON.stringify({
//                     name: player.name
//                 }),
//                 headers: {
//                     'Content-type': 'application/json'
//                 }
//             });
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     static SaveAnswer = async (answer: Answer) => {
//         const url = `${config.BaseUrl}/player/saveanswer/`;
//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 body: JSON.stringify({
//                     summaryId: answer.summaryId,
//                     answer: answer.answer,
//                     id: answer.id,
//                     questionId: answer.questionId,
//                     sessionId: answer.sessionId
//                 }),
//                 headers: {
//                     'Content-type': 'application/json'
//                 }
//             });
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }
