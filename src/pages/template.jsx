import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Top from '../components/Top';
import Home from '../pages/home/Home';


function Template() {
  return (
    <>
      <div classname="hold-transition sidebar-collapse layout-top-nav">
        <div className="wrapper">
          < Top />
          {/* Navbar */}
          < Navbar />
          {/* /.navbar */}
          {/* Main Sidebar Container */}
          <Sidebar />
          {/* Content Wrapper. Contains page content */}
          <Home/>
          {/* /.content-wrapper */}
          {/* Control Sidebar */}
          <aside className="control-sidebar control-sidebar-dark">
            {/* Control sidebar content goes here */}
          </aside>
          {/* /.control-sidebar */}
          {/* Main Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Template;
