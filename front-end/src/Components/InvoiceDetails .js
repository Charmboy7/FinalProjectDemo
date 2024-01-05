import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import  { useState, useEffect } from 'react';
import EmployeeService from '../Service/EmployeeService';
const InvoiceDetails = ({ invoiceData }) => {
  // Dummy data (replace this with your actual data)
  const dummyData = {
    billNo: '102',
    date: '2024-01-04',
    studentEmail: 'example@example.com',
    feeReceived: '$500',
    sumOfRupees: '$1000',
    paymentMode: 'Credit Card',
    courseRegisteredFor: 'React Development',
    totalCourseFee: '$1200',
    studentContactNo: '123-456-7890',
    totalPaid: '$700',
    paymentType: 'One-time Payment',
    balance: '$500',
  };


  const handleDownloadPDF = () => {
    const doc = new jsPDF();
  
    // Function to add the logo to the PDF
    const addLogoToPDF = (logoImg) => {
      const logoWidth = 50;
      const logoHeight = (logoImg.height * logoWidth) / logoImg.width;
      const offsetX = doc.internal.pageSize.width - logoWidth - 10;
      const offsetY = 10;
  
      doc.addImage(logoImg, 'PNG', offsetX, offsetY, logoWidth, logoHeight);
  
      return offsetY + logoHeight + 10; // Return the logo's height + padding
    };
  
    // Function to generate the PDF
    const generatePDF = (logoImg) => {
      const logoHeight = addLogoToPDF(logoImg);
  
      const tableData1 = employees.map((employee) => ({
        'ID': employee.id,
        'Employee Name': employee.name,
        'Course Name': employee.course,
        'Fee Received': employee.feeReceived,
        'Payment Method': employee.paymentMethod,
      }));
    
      doc.autoTable({
        startY: logoHeight + 10,
        head: [
          { 'ID': 'ID', 'Employee Name': 'Employee Name', 'Course Name': 'Course Name', 'Fee Received': 'Fee Received', 'Payment Method': 'Payment Method' }
        ],
        body: tableData1,
      });
    
      const tableData = Object.entries(mergedData).map(([key, value]) => ({
        Field: key,
        Value: value,
      }));
    
      const tableHeight1 = doc.previousAutoTable.finalY || 10; // Get the height of the first table
    
      doc.autoTable({
        startY: tableHeight1 + 20, // Use the height of the first table as the start position for the second table
        head: [{ Field: 'Field', Value: 'Value' }],
        body: tableData,
      });
  
      const termsAndConditions = `
  Terms and Conditions: 
  * Service tax of 18% is applicable on Course Fee.
  * Registration Fee, Fine & Course Fee once paid, will not be Refunded.
  * This is Computer generated bill; no signature is required.
  I AGREE TO RECEIVE SMS/EMAIL, INFORMATION PROMOTION, SPECIAL OFFERS 
  & OTHER SERVICES FROM LMS`;
  
      doc.setFont('helvetica');
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
  
      // Calculate the height of the table
      const tableHeight = doc.previousAutoTable.finalY || 10;
  
      doc.text(termsAndConditions, 14, tableHeight + 10);
  
      doc.save('invoice_details.pdf');
    };
  
    const logoImg = new Image();
  
    logoImg.onload = function () {
      generatePDF(logoImg);
    };
  
    logoImg.onerror = function () {
      console.error('Error loading the logo image.');
      generatePDF(); // Generate PDF without the logo
    };
  
    logoImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAACUCAMAAADLemePAAAA/1BMVEX///8XNV1YgLMAcMAUV5YAa740hMgAbr8AJFMpecO70uqDipz29vgAKVaIk6Tq8PgAAEPq7O8MM18AHVC3vMfR1t1DZ5YAWLhQe7CDrNhJdq4PS4OludRFVnQASpEAUZPb4u1/m8AAZr0AAD3H0uNuj7sAADmiwuKYq8qKocTR2uhjiLc/cKsAAEeVvOC7yd0AF010f5SdprSyx+VcaYMlpt4oY6Cpsb3EyNAADUmWmql8pNU4dMJqcIgAPo2Byu0AM4e44PVDuO/T7fqb0u4AndxbvOtMn9JUjsUxP2Rxh6czS21geZ0AQn9ghskZGkskJlFDSGMATLVxmNAyMFbUilq8AAANRUlEQVR4nO2dC0PaShbHh7QqwsAQJNeYm8gEkxpINBARopZ2W+9D1t3WXvv9P8ueScAHZiYBjEjXfy1gyMD8cs6ceWZE6E1vetOb3vSmdRNOFAFhgleduSWFLWeqNpM5kR3L6aw6g8sJ25/2OWrCv33PX3UOl1Nn8F6k5mDN7efvi/k8suocLif9k5Bv31t1BpeULbbfvr3qDC4n7Kb4p7Pe9QNVxXyDNQ+fltcUms9b8/Cpz+JBvfeQT13z8Onc8TWbTfhvO/b7B8j70loXP4LMfaAZRPK8QZsdcx/wfTJXncUlRCUfm46u+77VoRQa09FR8rBB80lfcR6XkL6vgfNBL4HSjmVZvq9b7LD6sEQ21zZ8EvdTGyPSVlVV88A7oewN2n7H/0XCp7XvgUeCDZtMkwAzmG1rNyW66owuJGi1+OgzwshJaZ2Zaxk+O/8y8Zc/kKljU1i7v99fy9aZPeiQr5e4ObCIJOZby/CpOuiPr9j6BIWLDsSts6a16szOLx1fnn6Gev1904Uok9L6pKvO7dzC+POflygOHmmd26a7fq3PL6d/kU4UNfd11E7p/K1d+CSnzDdjp9yH1llU9zV5+uSsOr9z6vPp6Rc07fENKHFUL5LGfjQmlf2LJEnamkXPL3+e/nVp3Tmf2kGk04GWdSzCGqIkep7oyQcc7/FFed+KG1WRyg1+wrIooTJzOvkKvknuK/Sm19YfyHHYjzCebLY2OGptl7i5LJ9VBOr2ZU5CxdgRJZy9LOCap3/bDxqYcavzvvHZbKa0xjY33nG0JcIrFoQKOQnDijDZYzxyDHSnV5IqipYpQ0m54HXPky8pLu9kxcOW7V0x40kgQV2QMtCZC17FSPZOWqhnw2NwEAn//huMB1L5kw0psTIf59xJ9s5GTZxsikcdVXok1eP5putYotiSD16xnOidfXHRm+LpribNyks2oCZpmqj05YNXLyR5Jz0Tp4rx2MDDEzpmwKeATU9KqcvzwSvUkqq+ajcDHklAm0ib6RINIiOvAq9iJCSriwNLhEelJNPd++hdIRx4Ew9eBV7hw1PvVI7SEjUQdYV0sZvGDcw7m64Cr3v+JFUvJbBAa4CY6XRPXHYVePUn3onHaWkKDX1+utXgFQqz7eNhepJ/zw+3Krx6dSZRum8WflsfvNmGmXKdFjfXCq8wflz1Bel0a4VXLD9K0suQZJ3wKn36IEmYwTcFePFoipbUXFsR3uPeaSDu6YnwgMpux0vnTNtVPU19FXg71ftug5zWWeDjaa5PyP1aR2r5puppq8erGPdVX8oohABPTZj6wdS5N+HKnPPsrlOLUzsLXDybJufBak8a3yvDK/amF15OGYXg46lt7khYx4na3yvDq9enNXuYMgqxEB4DhFC6MrxCdzhJkCmwJOPxnDPOiGV7g5XhTTu1cqaSxwkt4oFM0rFE/LniFWrxKNZwCTxJXWZeJF+8nbjbYGQKLLxqXZM6C8/b5YtXqLPTlaxn8xplnu3TxQhzxtthNXs5W2ARtDlV1XV8+vrwKtBtwMbSeHHDU7fmNmHezmlgFKYPsqTjxSac+9aTnPFYtyGzb6b399gIoD+PCfPGq5SzdRay4TF5Xjt7nMkdr1/Oemrm3rqq2cJpoRfEKxSytabnwWPzKaafCfAF8LJrjrEWVTWzFMJ1xQNAqZ1uwGfGq1+nIdQFY0rzjpSpqYsAnxmvUk1rX3YF7eu5BwK9tOb2M+MVw5Sx9vq1wu/azj/OmTQSkyPeTjgU43WDZ8WD7tJLLtvZaWCxcxYVAd5/Fpj/End3nx1PPPBQMbAAb9h+uiQiXaL48vx4wsUr3QAJ8EJqz28/VXSL1PPjIdHyjooiwmugToa59VlpglukcsATzAUVR7IYD9EFZtcFt9jkgBfyzbcToBQ83qodofjr5nLAk8fc4DkOU/EQ9hPWXIml0hfEw1XeZFcFfDMVj62Y0+YzoMpdIp4DHgp563MqbLFLOh7C1PTmsaDKXZKbBx6vf15nvpkFD0RMdY4y6PKCSx54vKlYNq6UFQ8ukmO7mQl5TZdc8MLkNyvRYoKseCzIOK6ayUm5A/W54HG8s6LMhwdf1PHbUoY4w40tueChahJe/RrNi4fYFJAerat+TXiNpKpvMp8yJx77OistkHInOfPBS/TOmrwgHojoQh9VecMu+eAleefENxfDY3FG0Jt4Yeslxc7pAlYBXiDseWOH253gjknkhJcwY3mkpOL9ljJD4vOsp71saAHvnL2JasfA6Xiq61ABHvQmXgkeGRuPdT1dJSEcSoLsi+5Y4y5GftFqXaiUkTIAcLiAPgfPnb9R9m6rtcvTf3kZXB5PiiZILJwUK/DsvUV3ePM3qUX6PVc8BujqFn2yyyEvtKg2z96vE49FC801dbYFDYk3dCTU0nl3qKht3pe9Wjw2x6VpkmubZry9oy3xG2bcodyF8LZeBG8KORUXTuJvdvWKrZdZKn+g81fAE+yF8eqdcynj/QrW0wQN1fXH47Y3fwk8fpX+K+CpmnD5wLrj8Wv0XwBP5faEfgU8NWUd+Xrjae4Sy3ZeO56qmTT1y14X3hzTepq63JK5FeAFjptt2gtOEi/XeZV4IdvF35ZSej/wppkN7pXhxXPrlu6Y7uzWCXdoqms62VfEb25sLSAuXjcD3gEvcf0uMelYvu60TduFQuZNtibTJNt0dL8zz1Z5m1sLGG/r9zpHWax3xEtcf5w42g+X0g6Tb0Xbk839JzTIQpK5yvD9SyV+0/+NSJZbxwjlvCEr0aQPVmY393gOdXw/680KXB22MnzCYYsmv9EYxys5jO7zFZrpDSY+hEn1ySjDnKXzeJemn2RdcK5BI56zC5J2DlpQ4Y/4o4jmQNychSH2fHdI3ePRy+jpMvJWcgkRFUEFc8nASAkjStnB+JTL6cugX6mCb456Z4ySKiypDC+jF+Czk89WCFKiTEePcAKOTp9ckkcH5fJBGKW24kWMmEYZYB8Er7Dv6RFydBRT9sNifyoeeddqbRJEWq3W7iFC+re93T3ybu/b7u4eOCecdAFHdjfgg+jmbmvz9iICCHq9ItuIZfg9RMq4260NETofBx8O2BaIvQ/dGtuyRRnXDqr1MhjmplIbyahcCA4OfijGhxpbKBGeFc9GGDV+VMcHNQUF3ULlewTvxQNEHlstptrIUrWBTz1J9eA6u6rnwhWQdNWTOs7A4653nOJtXSDy7QJhsNPFPxidtLaPKWltl8hm6zLC29u9JaXWFcK3GyX4JcY77zUOKNgw/D6E64/R6KeMguK1HI77Mgrh5yZA8rhPcb9bBcwqooUAVXf68rBQC3CvHiL5IEDKzRA1DvpUKRTgih1MjOp4JnMkH8pfR7Ow7SCo0inrvmJXR1hywMA2JZrmYH3A6/ZN8Eq7kPb4XbRz/mGrhE52T+ACtsByFhgzwtsGZ9n8iEobYFyyHeHhck++Ocejc/k7m3nF8hDaLAHYAJ3XI09T+n0Usg3Z6EEVSqiM8PkIV88okkfXYNazIareIIx6fdQ4g7PKN3CtPkw8Gumu52AkezrSNTBYtDaAsnEji+3/rkvIYn9lyXHBmtwlVxO8vdbF7cXmPwSVLi6uGF6rw/CO4eEOD068Ajx4F5HNCV4ZjQzZaGCwEm70Rv1KI778QVFB9Hw0GhsoGAMpAUcsF3rlsmHI1SPAHEHIVY6GaFQvl8vjImqwPRMDcMvgPkpRx/MRNtvwAzha25rg6arjOLaHo+LpuFAkufNfd3gnTOjk3V7nkI+3+RhPHlVR4+fQoOgGXozPlfDsAZ5hhErfgLI4xTMaoBA9wuuPQ3b0IR69yxwxbYws12dTr9iyAS3Gc30LhDLhkfgpDsGb3zDqCK1nbTHn3Irx+ucI164havws4z4ECFq7w6PhAbjbyEDhUYP1gaqoWoi/8hFeb3IwyXos7/CZtu3Ggdi2Yzx/srt2JrzDUqlEcOuWfQDahui5t2sl4X2MrYdvWyfkKg4tshEgdF2E7P/s4z5Ekx4reyx/wQ5VDoYQTQwILYaiXBerEGfiJWXl2hQPAq3yIWDfixpdwDvvKmh4FvcaKGTAYmUKAoce5Q2ZgMfG/bDGyiGO8dpQ9gR426wqOAGf29jcOIan7e2rjz46+cjw3h0yxkOABbxvzHrfwHIXrdZe7JzUgKwM2fJoA0JI5fq6DweCG/h9OKbo+sbow3FE+zfjIVstF9zUjSJEkzHg9fqAB7+wmsCAPmLI1ukGP6DE9o+u2Wf7bNPpaAmxr8E3E9V2VQBxNE0GbMkE8g57w7FJFEaThVnXhnWiyOFhCWzeOSyxAEyiflX0ABU7JpO6M65AoXrc3osS3zWRZFa/BSF7xnL0DvwfDuXoFyQjuRaw5+EQagtZniSIkytwEMevowc6HEafSn0/qtiJGcdMP7qZFFts/EiG5iiOshU/POMfUmSIJ62T7AlYnqtduuDXUeZ9Lyjn297tFq8RmiBcHlVHkfEWks5dsZKP6PGFU5rHGZSgeq4s7D14/f4GwZve9KY3velV6n+FcwKSL7LdHAAAAABJRU5ErkJggg==';
  };
  
  
  
  

  const handleDownloadText = () => {
    let text = 'Invoice Details\n\n';
  
    const keys = Object.keys(mergedData);
    const values = Object.values(mergedData);
  
    const maxLength = keys.reduce((max, key) => (key.length > max ? key.length : max), 0);
  
    for (let i = 0; i < keys.length; i++) {
      text += `${keys[i].padEnd(maxLength, ' ')}: ${values[i]}\n`;
    }
  
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'invoice_details.txt');
  };
  
  function convertNumberToWords(number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    const numToWords = (num) => {
      if (num < 10) {
        return ones[num];
      } else if (num < 20) {
        return teens[num - 10];
      } else if (num < 100) {
        return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ' ' + ones[num % 10] : '');
      } else if (num < 1000) {
        return ones[Math.floor(num / 100)] + ' hundred' + (num % 100 !== 0 ? ' ' + numToWords(num % 100) : '');
      } else if (num < 1000000) {
        return numToWords(Math.floor(num / 1000)) + ' thousand' + (num % 1000 !== 0 ? ' ' + numToWords(num % 1000) : '');
      }
      // You can extend this for higher values like millions, billions, etc.
      return 'Number out of range';
    };
  
    const result = numToWords(number);
    return result.charAt(0).toUpperCase() + result.slice(1); // Capitalize the first letter
  }
  
  // Example usage:
  const amountInNumbers = 10000;
  const amountInWords = convertNumberToWords(amountInNumbers);
  console.log(amountInWords); // Output: "Ten thousand"
  
  

  // Merge dummy data with provided invoiceData, if available
  const mergedData = { ...dummyData, ...invoiceData };

  const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeeService.getEmployees()
            .then((response) => {
                const dataFromAPI = response.data;
                // Assuming dataFromAPI is an array of arrays representing employees/students
                const formattedData = dataFromAPI.map((employeeArray) => {
                    return {
                        id: employeeArray[0],
                        name: employeeArray[1],
                        course: employeeArray[2],
                        feeReceived: employeeArray[3],
                        paymentMethod: employeeArray[4]
                    };
                });
                setEmployees(formattedData);
            })
            .catch((error) => {
                console.error('Error fetching employees:', error);
            });
    }, []);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4">Invoice Details</h2>
          <table className="table">
  <tbody>
    {employees.map((employee) => (
      <>
        <tr key={employee.id}>
          <td>ID:</td>
          <td colSpan="4">{employee.id}</td>
        </tr>
        <tr>
          <td>Employee Name:</td>
          <td colSpan="4">{employee.name}</td>
        </tr>
        <tr>
          <td>Course Name:</td>
          <td colSpan="4">{employee.course}</td>
        </tr>
        <tr>
          <td>Fee Received:</td>
          <td colSpan="4">{employee.feeReceived}</td>
        </tr>
        <tr>
          <td>Payment Method:</td>
          <td colSpan="4">{employee.paymentMethod}</td>
        </tr>
      </>
    ))}
    <tr>
      <td>Sum of Rupees:</td>
      <td colSpan="4">{mergedData.sumOfRupees} ({amountInWords} rupees)</td>
    </tr>
    <tr>
      <td>Payment Mode:</td>
      <td colSpan="4">{mergedData.paymentMode}</td>
    </tr>
    <tr>
      <td>Course Registered For:</td>
      <td colSpan="4">{mergedData.courseRegisteredFor}</td>
    </tr>
    <tr>
      <td>Total Course Fee:</td>
      <td colSpan="4">{mergedData.totalCourseFee}</td>
    </tr>
    <tr>
      <td>Student Contact No:</td>
      <td colSpan="4">{mergedData.studentContactNo}</td>
    </tr>
    <tr>
      <td>Total Paid:</td>
      <td colSpan="4">{mergedData.totalPaid}</td>
    </tr>
    <tr>
      <td>Payment Type:</td>
      <td colSpan="4">{mergedData.paymentType}</td>
    </tr>
    <tr>
      <td>Balance:</td>
      <td colSpan="4">{mergedData.balance}</td>
    </tr>
    {/* Add more rows for additional fields */}
  </tbody>
</table>


          <div><button className="btn btn-primary mx-2" onClick={handleDownloadPDF}>
              Download PDF
            </button>
            <button className="btn btn-primary mx-2" onClick={handleDownloadText}>
              Download Text
            </button><br/><br/>
  <p><strong>Terms and Conditions:</strong></p>
  <ul>
    <li>Service tax of 18% is applicable on Course Fee.</li>
    <li>Registration Fee, Fine & Course Fee once paid, will not be Refunded.</li>
    <li>This is a Computer-generated bill; no signature is required.</li>
  </ul>
  <p>I AGREE TO RECEIVE SMS/EMAIL, INFORMATION PROMOTION, SPECIAL OFFERS & OTHER SERVICES FROM LMS</p>
</div><br/><br/>
    <div className="text-center mt-3">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
