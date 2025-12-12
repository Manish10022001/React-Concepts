// export function Alert({children, type="success"}){
//     return(
//         //Inline Styles
//         <div style={{
//             backgroundColor : type=== "success" ? "#10b981" : "#ef4444",
//             color: "black",
//             padding:"16px",
//             marginBottom:"16px",
//             borderRadius:"8px"
//         }} 
//         >
//             {children}
//         </div>
//     )
// }

// //exteernal css files: but this css files are global i.e it is applied to any jsx file to resolve this we have css modules
// import './Alert.css'
// export function Alert({children, type="success"}){
//     return(
//         <div className={`alert ${type}`}>
//             {children}
//         </div>
//     )
// }

//Css modules : gives best of both worlds -> separate css files
//                                        -> but with locally scoped classes
import styles from './Alert.module.css';
export function Alert({children, type="success"}){
    return(                               //used [] because type is dynamic value
        <div className={`${styles.alert} ${styles[type]}`}>
            {children}
        </div>
    )
}